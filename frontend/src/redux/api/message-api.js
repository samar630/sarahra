
import axios from 'axios'
const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
const Config = {
  token
} 

const  baseURL = "http://localhost:5000"
export const getAllmessage = async () => {
  try {
    const message = await axios.get(`${baseURL}/v1/messages`, Config)
    return message
  } catch(err) {
    return console.error(err)
  }
}


export const PostMessage = async (messages) => {
  try {
    const message = await axios.post(`${baseURL}/v1/messages/${id}`,Config, messages)
    return message
  } catch(err) {
    return console.error(err)
  }
}

