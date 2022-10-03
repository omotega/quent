import { Router } from 'express';

const userRouter = Router();

import { Register,login } from '../controllers/usercontroller';

userRouter.route('/register').post(Register);
userRouter.route('/login').get(login);

export default userRouter;