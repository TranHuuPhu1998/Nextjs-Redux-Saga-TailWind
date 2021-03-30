import * as taskTypes from '../constants/task'
import {take , fork, call,put} from 'redux-saga/effects'
import {getListTask} from '../apis/task'
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/taskActions'

function* watchFetchListTaskAction(){
    while(true) {
        const action = yield take(taskTypes.FETCH_TASK)
        const {params} = action.payload;
        const response = yield call(getListTask , params)
        const {status , data} = response;
        if(status === 200) {
            yield put(fetchListTaskSuccess(data))
        }else {
            yield put(fetchListTaskFailed(data))
        }
    }
}

function* taskSaga(){
    yield fork(watchFetchListTaskAction)
}

export default taskSaga;