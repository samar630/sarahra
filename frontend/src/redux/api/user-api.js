import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://localhost:5000',
  headers: {'Content-Type': 'application/json',
             
}
});
const token = null;
const  baseURL = "http://localhost:5000"
export const getAlluser = async () => {
  try {
    const user = await axios.get(`${baseURL}/v1/users`)
    return user.data
  } catch(err) {
    return console.error(err)
  }
}


export const createNewUsers = async (user) => {
  try {
    const res = await axios.post(`${baseURL}/v1/signUp`, 
      user?.user
    )
    console.log(res, 'res')
    return res?.data?.data?.newUser
  
  } catch(err) {
    return console.error(err, 'error')
  }
}
// export const loginUsers = async (user) => {
//   try {
//     const res = await axios.post(`${baseURL}/v1/signIn`,
//     user?.user
//     )
//     console.log(res, 'ressssssss')
//     return res
//
//   } catch(err) {
//     return console.error(err, 'error')
//   }
// }

export const loginUsers = async (user) => {
  try {
    axios.post(`${baseURL}/v1/signIn`,
        user?.user
    ).then(data => {
     localStorage.setItem('token', data?.data?.token)
     console.log(data, "data")
    })
  } catch(err) {
    return console.error(err, 'error')
  }
}
export const deleteExistedUser = async (id) => {
  try {
    await axios.delete(`/v1/users/${id}`)
    
    return id
  } catch(err) {
     return console.error(err)
  }
}