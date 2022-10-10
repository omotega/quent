import User from '../models/usermodel';
import { Request, Response } from 'express'
import { errorResponse, successResponse, handleError } from '../utils/response'
import { comparePassword, hashPassword } from '../utils/hash';
import { generateToken } from '../utils/token';

export const Register = async (req: Request, res: Response) => {
  try {
    const { name, email, password} = req.body;
    if (!name || !email || !password) return errorResponse(res, 400, 'incomplete credentials');
    const userExists = await User.findOne({ email: email });
    if (userExists) return errorResponse(res, 400, 'User already exists');
    const ispassword = await hashPassword(password);
    if (!ispassword) return errorResponse(res, 400, 'incorrect password');
    const user = await User.create({
      name,
      email,
      password: ispassword,
    });
    return successResponse(res, 201, 'account created succesfully', user);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'server error');
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return errorResponse(res, 400, 'incomplete credentials');
    const user = await User.findOne({ email });
    if (!user) return errorResponse(res, 404, 'User does not exists');
    const validatePassword = await comparePassword(password, user.password);
    if (!validatePassword) return errorResponse(res, 400, 'wrong Password')
    const token = await generateToken({ id: user.id, name: user.name, role: user.role });
    return successResponse(res, 200, 'user logged in successfully', { user, token });

  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'server error');
  }

}

export const updateProfile = async(req: Request, res: Response) => {
  try {
    const { _id } = req.user;
    const { name, address,} = req.body;
    const user = await User.findByIdAndUpdate({_id},{name,address},{new:true}).select('-password');
    return successResponse(res,200,'profile updated succesfully',user);
  } catch (error) {
    handleError(error,req);
    return errorResponse(res, 500, 'server error');
  }
}


