// import {push} from 'connected-react-router';
import { useRouter } from 'next/router'

import _get from 'lodash';
import {call , put , takeLatest} from 'redux-saga/effects';
// import {hideLoading , showLoading} from '../actions/ui';
import {STATUS_CODE , AUTHORIZATION_KEY} from '../constants';

import {
    loginFailed,
    loginSuccess,
    singupFailed,
    singupSuccess,
} from '../actions/auth';

import {login , singup} from '../apis/auth';
import * as authTypes from '../constants/auth';
import axiosService from '../common/Theme/axiosService'

function* processSignup({payload}) {
    const {email, password} = payload;
    const router = useRouter()

    try {
        const resp = yield call(singup , {
            email,
            password
        })
        const {data , status} = resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(singupSuccess(data));
            yield put(router.push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS))
        }else {
            yield put()
        }
    } catch (error) {
        const details = _get(error , 'response.data.detail' ,{});
        yield put(singupFailed(details));
    } 
    // finally {
    //     yield put(hideLoading())
    // }
}

function* processLogin({payload}) {
    const {email , password} = payload;
    try {
        const resp = yield call(login ,{
            email,
            password
        })       
        const {data , status} = resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(loginSuccess(data));

            const {token} = data;
            axiosService.setHeader('Authorization', `Bearer ${token}`);
            localStorage.setItem(AUTHORIZATION_KEY , token);

            yield put(push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS));
        }else {
            put(loginFailed(data));
        }
    } catch (error) {
        const err = _get(error , 'response.data' ,{});
        yield put(loginFailed(err));
    }
    // finally {
    //     yield put(hideLoading())
    // }
}
// takeLatest khi thực hiện 1 loạt các action thì nó chỉ thực thi và trả về 
// kết quả là action cuối cùng

// takeEvery thực thi và trả về kết quả của mọi action

function* authSaga(){
    yield takeLatest(authTypes.SIGNUP , processSignup);
    yield takeLatest(authTypes.LOGIN , processLogin);
}

export default authSaga;