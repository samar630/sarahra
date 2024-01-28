import express from 'express'
import {
  getUser,
  getUsers,
  updateUser,
  signIn,
  signUp,
  verify,
  profilePhoto,
  deleteUserProfile

} from '../../modules/user/user.contrpller.js'
import validate from '../../middleware/validate.js'
// import middSignUp from "../../middleware/checkEmail.js";//
import { auth } from '../../middleware/auth.js'
import { verifyAdmen, verifyUserAndAdmin } from '../../middleware/verifyToken.js'
import { photoUpload } from '../../middleware/photoUpload.js'

const userRouter = express.Router()

userRouter.post('/v1/signUp', [validate.signUp], signUp)
userRouter.post('/v1/signIn', signIn)
userRouter.post('/v1/profile', [auth], photoUpload.single('image'), profilePhoto)
userRouter.get('/v1/verify/:token', verify)
userRouter.get('/v1/users', verifyAdmen, getUsers)
userRouter.get('/v1/user/:id', getUser)
// update user
userRouter.put('/v1/user/:id', [verifyAdmen], updateUser)
userRouter.delete('/v1/user/:id', [auth, verifyUserAndAdmin], deleteUserProfile)

export default userRouter
