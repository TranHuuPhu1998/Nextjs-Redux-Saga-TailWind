import * as taskTypes from '../constants/task'
import * as taskitemTypes from '../constants/taskitem'
import _get from 'lodash/get'
import {take , fork, call,put , delay ,takeLatest} from 'redux-saga/effects'
import {getListTask} from '../apis/task'
import {getListTaskItem,addTaskItem} from '../apis/taskitem'
import {hideLoading , showLoading} from '../actions/ui'
import { 
    fetchListTaskFailed, 
    fetchListTaskSuccess, 
} from '../actions/taskActions'

import {
    fetchListTaskItemSuccess,
    fetchListTaskItemFailed,
    addTaskItemSucess,
    addTaskItemFailed,
} from '../actions/taskitem'

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
}

// TASK ITEM

function* watchFetchListTaskItemAction(){
    while(true) {
        yield take(taskitemTypes.FETCH_TASK_ITEM);

        try {
            yield put(showLoading());
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
            yield put(hideLoading());
        }
    }
}

function* processAddTaskItem({payload}){
    const {taskname , id} = payload;
    try {
        const response = yield call(addTaskItem , {
            taskname,
            id
        });
        const {data,status} = response;
        if(status === 201){
            yield put(addTaskItemSucess(data.data))
        }else {
            yield put(addTaskItemFailed())
        }

    } catch (error) {
        // yield put(addTaskItemFailed())
    } finally {
        // console.log("add task item failed");
    }
}


function* taskSaga(){
    yield fork(watchFetchListTaskAction);
    yield fork(watchFetchListTaskItemAction);
    yield takeLatest(taskitemTypes.ADD_TASK_ITEM , processAddTaskItem);
}

export default taskSaga;