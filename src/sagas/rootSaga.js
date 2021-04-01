import { fork, all } from 'redux-saga/effects';
import taskSaga from './task';
import authSaga from './auth';
import userSage from './user';

function* rootSaga() {
  yield all([
    yield fork(taskSaga),
    yield fork(authSaga),
    yield fork(userSage),
  ]);
}

export default rootSaga;