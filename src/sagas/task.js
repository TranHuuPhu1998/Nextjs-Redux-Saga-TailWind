import * as taskTypes from '../constants/task'
import _get from 'lodash/get'
import {take , fork, call,put , delay ,takeLatest} from 'redux-saga/effects'
import {getListTask,getListTaskItem} from '../apis/task'
import {hideLoading , showLoading} from '../actions/ui'
import { 
    fetchListTaskFailed, 
    fetchListTaskSuccess, 
    fetchListTaskItemSuccess,
    fetchListTaskItemFailed
} from '../actions/taskActions'

// TASK LIST

function* watchFetchListTaskAction(){
    while(true) {
        yield take(taskTypes.FETCH_TASK);
        try {
            yield put(showLoading());
            const response = yield call(getListTask);
            const {status , data} = response;
            if(status === 200) {
                yield put(fetchListTaskSuccess(data.data));
            }else {
                yield put(fetchListTaskFailed(data.data));
            }
        } catch (error) {
            const details = _get(error, 'response.data.details', {});
            yield put(fetchListTaskFailed(details));
        }finally {
            yield delay(100);
            yield put(hideLoading()); 
        }
    }
}

// TASK ITEM

function* watchFetchListTaskItemAction(){
    while(true) {
        const resp = yield take(taskTypes.FETCH_TASK_ITEM);
        console.log("🚀 ~ file: task.js ~ line 42 ~ function*watchFetchListTaskItemAction ~ resp", resp)
        try {
            yield put(showLoading());
            const response = yield call(getListTaskItem);
            console.log("🚀 ~ file: task.js ~ line 45 ~ function*watchFetchListTaskItemAction ~ response", response)
        } catch (error) {
            const details = _get(error, 'response.data.details', {});
            yield put(fetchListTaskItemFailed(details));
        } finally {
            yield delay(100);
            yield put(hideLoading());
        }
    }
}


function* taskSaga(){
    yield fork(watchFetchListTaskAction);
}

export default taskSaga;