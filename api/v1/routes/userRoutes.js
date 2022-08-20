import { Router } from "express";
import userController from "../../controllers/userController.js";
import loginValidator from "../../middlewares/validateLogin.js";


const userRouter = Router();

userRouter.post('/register', userController.createNewUser);
userRouter.post('/login', loginValidator, userController.userAuthenticator);



export default userRouter;


