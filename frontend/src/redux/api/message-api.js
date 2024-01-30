
import defaultAxios from 'axios'
const token = localStorage.getItem("token")

const axios = defaultAxios.create({
  baseURL: 'http://localhost:5000',
  headers: {
      "Content-Type" :"application/json",
    'Authorization': `Bearer ${token}`
  }
});


const  baseURL = "http://localhost:5000"
export const getAllmessage = async () => {
  try {
    const message = await axios.get(`${baseURL}/v1/messages`)
    return message
  } catch(err) {
    return console.error(err)
  }
}

