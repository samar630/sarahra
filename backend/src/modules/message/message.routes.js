import express from 'express';
import {
  addMessage,
  deleteMessage,
  getUserMessages,
  updateMessage,
} from '../../modules/message/messag.controller.js';
import validate from '../../middleware/validate.message.js';
import { auth } from '../../middleware/auth.js';
import { verifyToken, verifyUserAccess } from '../../middleware/verifyToken.js';

const messageRouter = express.Router();

messageRouter.post('/', [validate.message, auth], addMessage);
messageRouter.get('/', [auth], getUserMessages);
messageRouter.patch('/:id', [auth, verifyToken], updateMessage);
messageRouter.delete('/:id', [auth, verifyToken], deleteMessage);

export default messageRouter;
