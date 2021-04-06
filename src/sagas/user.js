import * as userTypes from '../constants/user'
import _get from 'lodash/get'
import { getListUser , deleteUser ,updateUser ,createUser} from '../apis/user'
import { call, delay, fork, put, take,takeEvery,takeLatest } from '@redux-saga/core/effects'
import { hideLoading, showLoading } from '../actions/ui'
import {
    fetchListUserSuccess ,
    fetchListUserFailed,
    deleteUserSuccess,
    deleteUserFailed,
    updateUserSuccess,
    updateUserFailed,
    createUserSuccess,
    createUserFailed
} from '../actions/user'
import {STATUS_CODE} from '../constants'

function* watchFetchListUserAction(){
    while(true){
        yield take(userTypes.FETCH_USER)
        try {
            
            yield put(showLoading())
            const response = yield call(getListUser)
            const {status , data} = response;
            if(status === 200) {
                yield put(fetchListUserSuccess(data.data))
            }else {
                yield put(fetchListUserFailed(data.data))
            }
        } catch (error) {
            const details = _get(error , 'reponse.data.details' ,{});
            yield put(fetchListUserFailed(details));
        } finally {
            yield delay(100);
            yield put(hideLoading());
        }
    }
}

function* processdeleleUser({payload}){
    const {id} = payload;
    if(id !== null) {
        yield put(showLoading());
        try {
            const resp = yield call(deleteUser , id);

            const {data , status} = resp;
            if(status === 200){
                yield put(deleteUserSuccess(id))
            }else {
                yield put(deleteUserFailed(data.data))
            }
        } catch (error) {
            const details = _get(error , 'reponse.data.details' , {});
            yield put(deleteUserFailed(details));
        } finally {
            yield delay(100);
            yield put(hideLoading())
        }
    }else {
        yield put(deleteUserFailed('Id không tồn tại'))
    }
    
}

function* processUpdateUser({payload}){
    const {id , name , email , permission , position, status ,isAdmin} = payload;

    if(id !== null){
        yield put(showLoading())
        try {
    
            const resp = yield call(updateUser , {
                name,
                email,
                position,
                permission,
                status,
                isAdmin
            }, id)

            const {data } = resp;
            if(resp.status === 200) {
                yield put(updateUserSuccess(data))
            }
            else {
                yield put(updateUserFailed())
            }
        } catch (error) {
            yield put(updateUserFailed())
        } finally {
            yield put(hideLoading())
        }
    }else {
        
    }
 
}

function* processCreateUser({payload}) {

    const {
        name,
        email,
        password,
        status,
        position,
        permission,
        isAdmin} = payload;
    yield put(showLoading());
    try {
        const resq = yield call(createUser , { 
            name,
            email,
            password,
            status,
            position,
            permission,
            isAdmin,
        });
        console.log("🚀 ~ file: user.js ~ line 121 ~ function*processCreateUser ~ resq", resq);
        const {data} = resq;
        if(data.status === STATUS_CODE.SUCCESS) {
            yield put(createUserSuccess(data.user))
        }else {
            yield put(createUserFailed())
        }
       
    } catch (error) {
        yield put(createUserFailed())
    } finally {
        yield put(createUserFailed())
        yield put(hideLoading())
    }
}

function* userSaga(){
    yield fork(watchFetchListUserAction)
    yield takeLatest(userTypes.DELETE_USER , processdeleleUser);
    yield takeLatest(userTypes.UPDATE_USER , processUpdateUser);
    yield takeLatest(userTypes.CREATE_USER , processCreateUser);
}

export default userSaga;