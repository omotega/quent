import { Request, Response,NextFunction } from 'express';
import { errorResponse } from '../utils/response';
import { decodeToken } from '../utils/token';
import User from '../models/usermodel';


export const authProtect = async(req: Request, res: Response,next:NextFunction) => {
    try {
        if(req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            const decode:any = await decodeToken(token);
            const user = await User.findById(decode.id);
            if(!user) return errorResponse(res,401,'user not found');
            req.user = user;
           return next()
        } else {
            return errorResponse(res,401,'authorization not found');
        }
            
    } catch (error:any) {
        return errorResponse(res, 500, error.message);
    }
}

export const verifyAdmin = async(req: Request, res: Response,next:NextFunction) => {
    try {
        const { _id } = req.user;
        const admin = await User.findOne({_id,role:'admin'});
        if(!admin) return errorResponse(res,401,'unauthorized access');
        return next()
    } catch (error:any) {
        return errorResponse(res, 500, error.message);
    }
}

