import * as projectTypes from '../constants/project'
import _get from 'lodash/get'
import {call, fork, put, take , takeLatest} from 'redux-saga/effects'
import { hideLoading, showLoading } from '../actions/ui'
import { 
    fetchProjectSuccess,
    fetchProjectFailed,
    deleteProjectSuccess,
    deleteProjectFailed,
    addProjectSuccess,
    addProjectFailed
} from '../actions/project'
import { getListProject , deleteProject , CreateProject} from '../apis/project'

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

function* processDeleteProject({payload}) {
    const {id} = payload;
    try {
        const resp = yield call(deleteProject , id);
        const {status} = resp;
        if(status === 200){
            yield put(deleteProjectSuccess(id))
        }else {
            yield put(deleteProjectFailed())
        }
    } catch (error) {
        yield put(deleteProjectFailed())
    } finally {
        // yield put(deleteProjectFailed())
    }
}

function* processCreateProject({payload}){
    const {project_client,project_name,project_type,project_status,date_start,date_end,members} = payload;
    try {
        const resp = yield call(CreateProject , {
            project_client,
            project_name,
            project_type,
            project_status,
            date_start,
            date_end,
            members
        });
        const {data , status} = resp;     
        if(status === 201) {
            console.log("vooo");
            yield put(addProjectSuccess(data.data))
        }   
        else {
            yield put(addProjectFailed())
        }
    } catch (error) {
        yield put(addProjectFailed())
    }
}

function* projectSaga(){
    yield fork(watchFetchListProjectAction);
    yield takeLatest(projectTypes.DELETE_PROJECT ,processDeleteProject);
    yield takeLatest(projectTypes.ADD_PROJECT , processCreateProject);
}

export default projectSaga;