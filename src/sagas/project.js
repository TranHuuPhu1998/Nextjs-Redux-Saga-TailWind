import * as projectTypes from '../constants/project'
import _get from 'lodash/get'
import {call, fork, put, take , takeLatest} from 'redux-saga/effects'
import { hideLoading, showLoading } from '../actions/ui'
import {fetchProjectSuccess,fetchProjectFailed} from '../actions/project'
import {getListProject} from '../apis/project'

function* watchFetchListProjectAction(){
    while(true){
        yield take(projectTypes.FETCH_PROJECT);
        try {
            yield put(showLoading());
            const response = yield call(getListProject);
          
            const {data , status} = response;
            if(status === 200){
                yield put(fetchProjectSuccess(data.data))
            }else {
                yield put(fetchProjectFailed())
            }
        } catch (error) {
            const details = _get(error , 'response.data.details', {});
            yield put(fetchProjectFailed(details))
        } finally {
            yield put(fetchProjectFailed())
            yield put(hideLoading())
        }
    }
}

function* projectSaga(){
    yield fork(watchFetchListProjectAction);
}

export default projectSaga;