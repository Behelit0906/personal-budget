import { Router } from "express";
import operationController from "../../controllers/operationController.js";
import tokenValidator from "../../middlewares/validateToken.js";

const operationRouter = Router();
operationRouter.use(tokenValidator);

operationRouter.get('/',operationController.getAllOperations);
operationRouter.get('/:operationId',operationController.getOneOperation);
operationRouter.post('/', operationController.createNewOperation);
operationRouter.patch('/:operationId',operationController.updateOperation);
operationRouter.delete('/:operationId',operationController.deleteOperation);


export default operationRouter;