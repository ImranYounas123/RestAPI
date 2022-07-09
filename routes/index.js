import express from "express";
import {registerControler} from "../controllers";
const router = express.Router();


router.post('/register', registerControler.register);












export default router;