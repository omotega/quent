import { Router } from 'express';


const postRouter = Router();

import { createPost,getAllPost,getPostById,updatePost,deletePost } from '../controllers/post';
import { authProtect } from '../middlewares/auth'

postRouter.route('/').get(authProtect,getAllPost).post(authProtect,createPost);
postRouter.route('/:postId').get(authProtect,getPostById).patch(authProtect,updatePost).delete(authProtect,deletePost);

export default postRouter;