import { Router } from "express";
import userController from "../../controllers/userController.js";


const userRouter = Router();

userRouter.post('/register', userController.createNewUser);
userRouter.post('/login', userController.userAuthenticator);



export default userRouter;


