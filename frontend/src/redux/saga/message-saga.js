import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects';
  import {
    getAllmessage
  } from '../api/message-api';

  import { 
    SET_LOADING,
    GET_MESSAGE, 
    GET_MESSAGE_REQUESTED,
    CREATE_MESSAGE,
    CREATE_MESSAGE_REQUESTED, 
  } from '../actions/message-action';

  function* getMessage({payload}){
    yield put({type: SET_LOADING})
    const message = yield call(getAllmessage, payload.token)
    yield put({type: GET_MESSAGE, payload: {message}})
  }

  export default function* messageSaga() {
    yield takeEvery(GET_MESSAGE_REQUESTED, getMessage)
  }