import { spawn } from 'redux-saga/effects'

// Sagas
import userSaga from './user-saga'

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(userSaga)
}