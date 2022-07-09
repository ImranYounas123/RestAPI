import dotenv from 'dotenv';
dotenv.config(); //jitne bh keys hai yaha mil jahy gy
export const {
    APP_PORT,
    DEBUG_MODE,
} = process.env; //destructuring object