import * as taskTypes from '../constants/task';
import * as taskitemTypes from '../constants/taskitem';
import _get from 'lodash/get';
import {take , fork, call,put , delay ,takeLatest} from 'redux-saga/effects';
import {getListTask} from '../apis/task';
import {getListTaskItem,addTaskItem,updateTask} from '../apis/taskitem';
import {hideLoading , showLoading} from '../actions/ui';

import { 
    fetchListTaskFailed, 
    fetchListTaskSuccess, 
} from '../actions/taskActions';

import {
    fetchListTaskItemSuccess,
    fetchListTaskItemFailed,
    addTaskItemSuccess,
    addTaskItemFailed,
    updateTaskItemSuccess,
    updateTaskItemFailed
} from '../actions/taskitem';

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
            yield put(hideLoading()); 
        }
    }
};
// TASK ITEM

function* watchFetchListTaskItemAction(){
    while(true) {
        yield take(taskitemTypes.FETCH_TASK_ITEM);
        try {
            // yield put(showLoading());
            const response = yield call(getListTaskItem);
            const {data , status} = response;
            if(status === 200){
                yield put(fetchListTaskItemSuccess(data.data))
            }else {
                yield put(fetchListTaskItemFailed())
            }
        } catch (error) {
            const details = _get(error, 'response.data.details', {});
            yield put(fetchListTaskItemFailed(details));
        } finally {
            // yield put(hideLoading());
            yield put(fetchListTaskItemFailed());
        }
    }
};

function* processAddTaskItem({payload}){
    console.log("🚀 ~ file: task.js ~ line 70 ~ function*processAddTaskItem ~ payload", payload)
    const {data} = payload;
    
    const _status = 'open';
    try {
        const resp = yield call(addTaskItem , {taskname,file:imgpath,id,status : _status});
   
        const {data , status} = resp;
        if(status === 201) {
            yield put(addTaskItemSuccess(data.data));
        }else {
            yield put(addTaskItemFailed());
        }
    } catch (error) {
        yield put(addTaskItemFailed());
    } 
};

function* processUpdateTaskItem({payload}){
    const {taskname,taskid,id} = payload;
    const statusTask = payload.status;
    try {
        const resp = yield call(updateTask,{taskname,taskid,status:statusTask,id});
    } catch (error) {
        yield put(updateTaskItemFailed())
    }
};

function* taskSaga(){
    yield fork(watchFetchListTaskAction);
    yield fork(watchFetchListTaskItemAction);
    yield takeLatest(taskitemTypes.ADD_TASK_ITEM , processAddTaskItem);
    yield takeLatest(taskitemTypes.UPDATE_TASK_ITEM , processUpdateTaskItem);
};

export default taskSaga;