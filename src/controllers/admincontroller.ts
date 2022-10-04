import { Request, Response } from 'express';
import { errorResponse, handleError, successResponse } from '../utils/response';
import User from '../models/usermodel';
import { hashPassword } from '../utils/hash';


export const registerLandlord = async (req: Request, res: Response) => {
  try {
    const { name, email, address, password,role } = req.body;
    if (!name || !email || !address || !password || !role) return errorResponse(res, 400, 'incomplete credentials');
    const landlordExist = await User.findOne({email});
    if(landlordExist) return errorResponse(res,401, 'landlord already exist');
    const ispassword = await hashPassword(password);
    if(!ispassword) return errorResponse(res, 400,'incorrect password');
    const landlord = await User.create({ 
      name,email,address,password:ispassword,role,
    });
    return successResponse(res,201,'landlord created succesfully',landlord)
  } catch (error) {
    handleError(error,req);
    return errorResponse(res, 500, 'server error');
  }
}