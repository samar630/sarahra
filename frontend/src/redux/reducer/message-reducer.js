
import { 
    SET_LOADING,
    GET_MESSAGE, 
    CREATE_MESSAGE,
  } from '../actions/message-action';

  const initialState = {
    loading: false,
    message: [],
    token:[]
  }
  
const reducerMessage = (state = initialState, {type, payload}) => {
  console.log(payload, "payload")
    switch(type) {
      case SET_LOADING:
        return {
          ...state,
        loading: true,
        }
        case GET_MESSAGE:
         return {
          ...state,
          message: payload,
          loading: false
        }
       case CREATE_MESSAGE:
        return {
          ...state,
          message: payload?.message?.message?.message,
          loading:false
        }
      default:
        return state
    }
  }

  export default reducerMessage