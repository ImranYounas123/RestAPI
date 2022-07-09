import { DEBUG_MODE } from "../config";
import { ValidationError } from "joi";
import CustomErrorHandler from "../services/CustomErrorHandler";
const errorhandler = (err, req, res, next)=>{
    let statusCode = 500;
    let data = {
        messsage : 'Internal Server error',
        ...(DEBUG_MODE === 'true' && {originalError : err.messsage}) 
    }
    if(err instanceof ValidationError){
        statusCode = 422;
        data = {
            messsage : err.message
        }
    }
    // ==========================================================
    if(err instanceof CustomErrorHandler){
        statusCode = err.status;
        data = {
            message : err.message
        }
    }
    return res.status(statusCode).json(data);
}

export default errorhandler;