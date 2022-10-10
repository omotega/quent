import { Request, Response } from 'express';
import Comment from '../models/comment';
import { errorResponse, handleError, successResponse } from '../utils/response';


export const createcomment = async(req:Request, res:Response) => {
    try {
        const { _id } = req.user;
        const { postId } = req.params;
        const { post } = req.body;
        const  comment = await Comment.create({post,user_id: _id,post_id: postId});
        return successResponse(res,201,'comment created',comment)
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
} 


export const deletecomment = async(req:Request, res:Response) => {
    try {
        const { commentId } = req.params;
        const comment = await Comment.findByIdAndDelete(commentId);
        return successResponse(res,201,'comment deleted',comment)
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}