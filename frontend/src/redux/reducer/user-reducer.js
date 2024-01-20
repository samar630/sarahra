
import { 
    SET_LOADING,
    GET_USERS, 
    CREATE_USERS,
    DELETE_USERS_REQUESTED,
    CREATE_LOGIN, 
  } from '../actions/auth-action';

  const initialState = {
    loading: false,
    user: [],
   
  }
  
const reducerUser = (state = initialState, {type, payload}) => {
  console.log(payload, "payload")
    switch(type) {
      case SET_LOADING:
        return {
          ...state,
        loading: true
        }
 
      case GET_USERS:
        return {
          ...state,
          user: payload,
          loading: false
        }
    
      case CREATE_USERS:
        return {
      ...state,
      user: [payload?.newUser, ...state.user],
      loading: false
        }
     case CREATE_LOGIN:
      return {
       ...state,
       user: [payload?.newUser, ...state?.user]
      }
      case DELETE_USERS_REQUESTED:
        return {
          ...state,
      user: state.user.filter(user => user.id !== payload),
      loading: false
        }
     
      default:
        return state
    }
  }

  export default reducerUser