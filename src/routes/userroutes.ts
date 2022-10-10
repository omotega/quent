import { Router } from 'express';

const userRouter = Router();

import { authProtect } from '../middlewares/auth'
import { Register,login,updateProfile } from '../controllers/usercontroller';

userRouter.route('/register').post(Register);
userRouter.route('/login').get(login);
userRouter.route('/profile').post(authProtect,updateProfile);

export default userRouter;