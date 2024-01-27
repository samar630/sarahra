import axios from 'axios'



const  baseURL = "http://localhost:5000"
export const getAllmessage = async () => {
  try {
    const message = await axios.get(`${baseURL}/v1/messages`)
    return message.data
  } catch(err) {
    return console.error(err)
  }
}

