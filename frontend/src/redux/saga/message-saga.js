import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects';
  import {
    PostMessage,
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
    const message = yield call(getAllmessage, payload)
    yield put({type: GET_MESSAGE, payload: {message}})
  }
 
  function* postMessage({payload}){
    yield put({type: SET_LOADING})
   const massege = yield call(PostMessage, payload?.message?.massege)
    console.log(massege, 'massege')
    yield put({type: CREATE_MESSAGE, payload:{massege}})
  }
  export default function* messageSaga() {
    yield takeEvery(GET_MESSAGE_REQUESTED, getMessage)
    yield takeEvery(CREATE_MESSAGE_REQUESTED, postMessage )
  }