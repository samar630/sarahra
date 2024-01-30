
import { 
    SET_LOADING,
    GET_MESSAGE, 
    GET_MESSAGE_REQUESTED,
    CREATE_MESSAGE,
    CREATE_MESSAGE_REQUESTED,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
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

      default:
        return state
    }
  }

  export default reducerMessage