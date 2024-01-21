import { 
    SET_LOADING,
    GET_USERS, 
    GET_USERS_REQUESTED,
    CREATE_USERS_REQUESTED,
    CREATE_USERS,
    DELETE_USERS_REQUESTED,
    DELETE_USERS, 
  } from '../actions/auth-action';

  import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects';
  import {
    getAlluser,
    createNewUsers,
    deleteExistedUser
  } from '../api/user-api';

  function* getUsers(){
    const users = yield call(getAlluser)
    yield put({type:SET_LOADING, payload: users })
  }

  function* createUser({payload}){
    yield put({type: SET_LOADING})
    const newUser = yield call(createNewUsers, payload)
    yield put({type: CREATE_USERS, payload: {newUser}})
    
   
  }

  function* deleteUser({payload}){
    yield put({type: SET_LOADING})
    const user = yield call(deleteExistedUser, payload)
    yield put({type: DELETE_USERS, payload: user})
  }

  export default function* userSaga() {
    yield takeEvery(GET_USERS_REQUESTED, getUsers)
    yield takeEvery(CREATE_USERS_REQUESTED, createUser)
    yield takeEvery(DELETE_USERS_REQUESTED, deleteUser)
  }