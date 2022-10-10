import { Router } from 'express';


const commentRouter = Router();

import { createcomment,deletecomment } from '../controllers/commentcontroller'
import { authProtect } from '../middlewares/auth'


commentRouter.route('/:postId').post(authProtect,createcomment);
commentRouter.route('/:commentId').post(authProtect,deletecomment)

export default commentRouter;