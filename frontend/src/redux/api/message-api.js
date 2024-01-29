import axios from 'axios'



const  baseURL = "http://localhost:5000"
export const getAllmessage = async (token) => {
  try {
    const message = await axios.get(`${baseURL}/v1/messages`, token)
    return message
  } catch(err) {
    return console.error(err)
  }
}

