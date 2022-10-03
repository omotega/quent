import User from '../models/usermodel';
import { Request, Response } from 'express'
import { errorResponse, successResponse, handleError } from '../utils/response'
import { hashPassword } from '../utils/hash';
import { generateToken } from '../utils/token';

export const  Register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return errorResponse(res, 400, 'incomplete credentials');
        const userExists = await User.findOne({ email: email });
        if(userExists) return errorResponse(res, 400, 'User already exists');
        const hash = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password:hash,
        });
        if(!user) return errorResponse(res,400 , 'incorrect password');
        const token = await generateToken({id:user._id, password:user.password,role:user.role});
        return successResponse(res,201,'account created succesfully',user);
    } catch (error) {
        handleError(error,req);
        return errorResponse(res,500,'server error');
    }
}