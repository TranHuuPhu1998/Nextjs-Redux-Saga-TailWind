import {push} from 'connected-react-router';
import _get from 'lodash';
import {call , put , take, takeLatest ,delay, takeEvery,cancel,fork} from 'redux-saga/effects';
import {hideLoading , showLoading} from '../actions/ui';

import {STATUS_CODE , AUTHORIZATION_KEY} from '../constants';

import {
    loginFailed,
    loginSuccess,
    singupFailed,
    singupSuccess,
    sendMailSuccess,
    sendMailFailed,
    resetPasswordSuccess,
    resetPasswordFailed
} from '../actions/auth';

import {login , singup , sendMail, resetPassword} from '../apis/auth';
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
            permission,
        });
      
        const {data} = resp;

        if(data.status === STATUS_CODE.SUCCESS){
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
        yield put(hideLoading());
    }
}

function* processLogin({payload}) {

    const {email , password} = payload;
    yield put(showLoading());
    try {
        console.log("dispatch");
        const resp = yield call(login ,{
            email,
            password
        });   
        
        const {data} = resp;
      
        if(data.status === STATUS_CODE.SUCCESS){
            console.log("🚀 ~ file: auth.js ~ line 70 ~ function*processLogin ~ data", data.status === STATUS_CODE.SUCCESS)
            yield put(loginSuccess(data.user));
            const {access_token} = data;
           
            axiosService.setHeader('Authorization', `Bearer ${access_token}`);
           
            localStorage.setItem(AUTHORIZATION_KEY , access_token);
            if(data.user.isAdmin) {
                localStorage.setItem("ADMIN" , access_token);
            }
            // yield put(push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS));
            // yield axiosService.redirectPage("title",authTypes.REDIRECT_AFTER_LOGIN_SUCCESS);
            // yield axiosService.redirectTo(document , authTypes.REDIRECT_AFTER_LOGIN_SUCCESS);
        }else {
            yield put(loginFailed());
        }
    } catch (error) {
        yield put(loginFailed());
    }
    finally {
        yield delay(100);
        yield put(hideLoading());
    }
}

function* processSendMail({payload}){
    const {email} = payload;
    yield put(showLoading())
    try {
       
        const resp = yield call(sendMail , {email});
        const {data,status} = resp;
        
        if(status === 200) {
            yield put(sendMailSuccess(data));
        }else {
            yield put(sendMailFailed());
        }

    } catch (error) {
        yield put(sendMailFailed());
    } finally {
        yield delay(100);
        yield put(hideLoading());
    }
}

function* processResetPassword({payload}){
    const {password , token} = payload;
    yield put(showLoading())
    try {
        console.log("send");
        const resp = yield call(resetPassword , {token , password})
        const {data} = resp;
        if(data.status = STATUS_CODE.SUCCESS) {
            yield put(resetPasswordSuccess(data))
        }else {
            yield put(resetPasswordFailed())
        }
    } catch (error) {
        yield put(resetPasswordFailed());
    }
    finally {
        yield delay(100);
        yield put(hideLoading());
    }
}

// takeLatest khi thực hiện 1 loạt các action thì nó chỉ thực thi và trả về 
// kết quả là action cuối cùng

// takeEvery thực thi và trả về kết quả của mọi action

function* authSaga(){
    yield takeLatest(authTypes.SIGNUP , processSignup);
    yield takeLatest(authTypes.LOGIN,processLogin);
    yield takeLatest(authTypes.SEND_MAIL , processSendMail);
    yield takeLatest(authTypes.RESET_PASSWORD , processResetPassword);
}

export default authSaga;