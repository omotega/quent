import { Request,Response } from 'express';

function errorResponse(res:Response,statusCode:number,error:string)  {
    const responseObj = {statusCode,error};
    return res.status(statusCode).send(responseObj);
}

function successResponse(res:Response,statusCode:number,message:string,data:any =[]) {
    const responseObj = { statusCode,message,data };
    return res.status(statusCode).send(responseObj); 
}

function handleError(err:any,req:Request){
    console.log(`Error message: ${JSON.stringify(err.message)},Error caught at : ${JSON.stringify(req.path)}`);
}

export {
    errorResponse,
    successResponse,
    handleError
}