import { Router } from 'express';

const adminRouter = Router();

import { authProtect,verifyAdmin } from '../middlewares/auth'
import { getAllusers,getAllposts } from '../controllers/admincontroller' ;

adminRouter.route('/').post(authProtect,verifyAdmin,getAllusers).get(authProtect,verifyAdmin,getAllposts);


export default adminRouter;