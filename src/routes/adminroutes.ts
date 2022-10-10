import { Router } from 'express';

const adminRouter = Router();

import { authProtect,verifyAdmin } from '../middlewares/auth'
import { getAllusers} from '../controllers/admincontroller' ;

adminRouter.route('/').post(authProtect,verifyAdmin,getAllusers);

export default adminRouter;