import { combineReducers } from 'redux'


import reducerUser from './user-reducer'

export default combineReducers({

  user: reducerUser
})