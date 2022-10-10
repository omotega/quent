import { Request, Response } from 'express';
import Post from '../models/postmodel';
import { errorResponse, handleError, successResponse } from '../utils/response';


export const createPost = async (req: Request, res: Response) => {
    try {
        const { _id } = req.user
        const { post } = req.body;
        const pst = await Post.create({ post, user_id: _id });
        return successResponse(res, 201, 'post created', pst);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}

export const getAllPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.find({});
        if (!post) return errorResponse(res, 404, 'post not found');
        return successResponse(res, 200, 'post fetched succesfuly', post)
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId);
        if (!post) return errorResponse(res, 404, 'no post found');
        return successResponse(res, 200, 'post found');
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const { post } = req.body;
        const updatedpost = await Post.findByIdAndUpdate(postId, { post }, { new: true });
        return successResponse(res, 200, 'post found', updatedpost);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const post = await Post.findByIdAndDelete(postId);
        return successResponse(res, 200, 'post deleted succesfully', postId);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'server error');
    }
}

