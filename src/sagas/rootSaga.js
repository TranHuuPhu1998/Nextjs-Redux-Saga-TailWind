import { fork, all } from 'redux-saga/effects';
import taskSaga from './task';
import authSaga from './auth';
import userSage from './user';
import projectSaga from './project';

function* rootSaga() {
  yield all([
    yield fork(taskSaga),
    yield fork(authSaga),
    yield fork(userSage),
    yield fork(projectSaga)
  ]);
}

export default rootSaga;