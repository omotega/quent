import { Request, Response } from 'express';
import { errorResponse, handleError, successResponse } from '../utils/response';
import User from '../models/usermodel';
import Post from '../models/postmodel';


export const getAllusers = async (req: Request, res:Response) => {
  try {
    const user = await User.find({ });
    return successResponse(res,200,'users found',user);
  } catch (error) {
    handleError(error,req);
    return errorResponse(res, 500, 'server error');
  }
}

export const getAllposts = async(req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    return successResponse(res,200,'posts found',posts);
  } catch (error) {
    handleError(error,req);
    return errorResponse(res, 500, 'server error');
  }
}