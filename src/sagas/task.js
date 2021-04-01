import * as taskTypes from '../constants/task'
import _get from 'lodash/get';
import {take , fork, call,put , delay ,takeLatest} from 'redux-saga/effects'
import {getListTask} from '../apis/task'
import {hideLoading , showLoading} from '../actions/ui';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/taskActions'

function* watchFetchListTaskAction(){
    while(true) {
        yield take(taskTypes.FETCH_TASK)
        console.log("dispatch");
        try {
            yield put(showLoading())
            const response = yield call(getListTask)
            const {status , data} = response;
            if(status === 200) {
                yield put(fetchListTaskSuccess(data.data))
            }else {
                yield put(fetchListTaskFailed(data.data))
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

function* taskSaga(){
    yield fork(watchFetchListTaskAction);
}

export default taskSaga;