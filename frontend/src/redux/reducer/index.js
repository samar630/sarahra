import { combineReducers } from 'redux'


import reducerUser from './user-reducer'
import reducerMessage from './message-reducer'

export default combineReducers({

  user: reducerUser,
  message :reducerMessage
})