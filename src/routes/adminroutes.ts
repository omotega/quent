import { Router } from 'express';

const adminRouter = Router();

import { authProtect,verifyAdmin } from '../middlewares/auth'
import { registerLandlord } from '../controllers/admincontroller' ;

adminRouter.route('/register').post(authProtect,verifyAdmin,registerLandlord);

export default adminRouter;