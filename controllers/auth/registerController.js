import Joi, { ref } from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User }  from '../../models';
const registerController = {
   async register(req, res, next){
        // validation 
        const registeerSchema = Joi.object({
            name : Joi.string().min(3).max(30).required(),
            email :Joi.string().email().required(),
            password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password : Joi.ref('password')
        });
        console.log(req.body);
        const { error } = registeerSchema.validate(req.body);
        if(error){
            return next(error)
        }
        
        //if user already registered then error generate
        try{
            const exist = await User.exists({'email': req.body.email});
            if(exist){
                return next(CustomErrorHandler.alreadyExist('This Email is already Taken'));
            }
        }catch(err){
        return next(err);
        }

  res.json({
      msg : "Hello this is my fist message"
  })
    }
}


export default registerController;





