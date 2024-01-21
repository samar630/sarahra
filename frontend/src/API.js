import axios from "axios";

const API = axios.create({
	baseURL: process.env.REACT_APP_USER_BASE_URL,
	headers: { dev: true }

})

export default API