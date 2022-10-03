import { Router } from 'express';

const userRouter = Router();

import { Register } from '../controllers/usercontroller';

userRouter.route('/register').post(Register);

export default userRouter;