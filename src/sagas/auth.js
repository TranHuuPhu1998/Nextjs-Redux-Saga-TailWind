// import {push} from 'connected-react-router';
import _get from 'lodash';
import {Router} from 'react-router-dom';
import {call , put , take, takeLatest ,delay} from 'redux-saga/effects';
import {hideLoading , showLoading} from '../actions/ui';

import {STATUS_CODE , AUTHORIZATION_KEY} from '../constants';

import {
    loginFailed,
    loginSuccess,
    singupFailed,
    singupSuccess,
    sendMailSuccess,
    sendMailFailed
} from '../actions/auth';

import {login , singup , sendMail} from '../apis/auth';
import * as authTypes from '../constants/auth';
import axiosService from '../common/Theme/axiosService';

function* processSignup({payload}) {
    const {name , email, password , password_confirmation ,position, permission } = payload;
    yield put(showLoading());
    try {
        const resp = yield call(singup , {
            name,
            email,
            password,
            password_confirmation,
            position,
            permission
        });

        const {data , status} = resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(singupSuccess(data));
            axiosService.redirectTo(document , authTypes.REDIRECT_AFTER_SIGNUP_SUCCESS)
        }else {
            yield put(signupFailed(data));
        }
    } catch (error) {
        const details = _get(error , 'response.data.detail' ,{});
        yield put(singupFailed(details));
    } 
    finally {
        yield delay(100);
        yield put(hideLoading())
    }
}

function* processLogin({payload}) {
    const {email , password} = payload;
    yield put(showLoading());
    try {
        const resp = yield call(login ,{
            email,
            password
        })       
       
        const {data , status} = resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(loginSuccess(data));
            const {access_token} = data;
           
            axiosService.setHeader('Authorization', `Bearer ${access_token}`);
           
            localStorage.setItem(AUTHORIZATION_KEY , access_token);

            axiosService.redirectTo(document , authTypes.REDIRECT_AFTER_LOGIN_SUCCESS);
         
        }else {
            put(loginFailed(data));
        }
    } catch (error) {
        const err = _get(error , 'response.data' ,{});
        yield put(loginFailed(err));
    }
    finally {
        yield delay(100);
        yield put(hideLoading())
    }
}

function* processSendMail({payload}){
    const {email} = payload;
    console.log("🚀 ~ file: auth.js ~ line 87 ~ function*processSendMail ~ email", payload)
    yield put(showLoading())
    try {
        const resp = yield call(sendMail , {email})
        const {data , status} = resp;

        if(status === STATUS_CODE.SUCCESS) {
            yield put(sendMailSuccess(data))
        }else {
            yield put(sendMailFailed(data))
        }

    } catch (error) {
        const details = _get(error , 'response.data' ,{});
        yield put(sendMailFailed(details))
    } finally {
        yield delay(100);
        yield put(hideLoading())
    }
}

// takeLatest khi thực hiện 1 loạt các action thì nó chỉ thực thi và trả về 
// kết quả là action cuối cùng

// takeEvery thực thi và trả về kết quả của mọi action

function* authSaga(){
    yield takeLatest(authTypes.SIGNUP , processSignup);
    yield takeLatest(authTypes.LOGIN , processLogin);
    yield takeLatest(authTypes.SEND_MAIL , processSendMail);
}

export default authSaga;