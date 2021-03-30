import * as types from '../constants/auth';

export const singup = data => ({
    type : types.SIGNUP,
    payload: {
        email,
        password
    }
})

export const singupSuccess = data => ({
    type : types.SIGNUP_SUCCESS,
    payload : {
        data
    }
});

export const singupFailed = error => ({
    type:types.SIGNUP_FAILED,
    payload : {
        error
    }
});

export const login = (email, password) => ({
    type : types.LOGIN,
    payload : {
        email,
        password
    }
})

export const loginSuccess = data => ({
    type : types.LOGIN_SUCCESS,
    payload : {
        data
    }
})

export const loginFailed = error => ({
    type : types.LOGIN_FAILED,
    payload : {
        error
    }
})