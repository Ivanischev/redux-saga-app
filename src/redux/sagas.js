import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./user/userActionConstants"
import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUsers() {
  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put({ type: FETCH_USERS_SUCCESS, payload: users.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, error });
  }
}

function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}

export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
  ]);
}