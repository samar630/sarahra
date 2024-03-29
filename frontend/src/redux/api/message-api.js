
import axios from 'axios'

const token = localStorage.getItem("token")
console.log(token,'token')



const  baseURL = "http://localhost:5000"
export const getAllmessage = async () => {
  const headers = {
    token
  }

  try {   
    const message = await axios.get(`${baseURL}/v1/messages`, {headers})
    return message
  
  } catch(err) {
    return console.error(err)
  }
}


export const PostMessage = async (messages) => {
  const headers = {
    token
  } 
  try {
    const message = await axios.post(`${baseURL}/v1/messages`,messages,{headers})
    return message?.message?.message
  } catch(err) {
    return console.error(err)
  }
}

