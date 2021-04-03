import * as userTypes from '../constants/user'
import _get from 'lodash/get'
import { getListUser , deleteUser } from '../apis/user'
import { call, delay, fork, put, take,takeLatest } from '@redux-saga/core/effects'
import { hideLoading, showLoading } from '../actions/ui'
import {
    fetchListUserSuccess ,
    fetchListUserFailed,
    deleteUserSuccess,
    deleteUserFailed
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

function* userSaga(){
    yield fork(watchFetchListUserAction)
    yield takeLatest(userTypes.DELETE_USER , processdeleleUser);
}

export default userSaga;