import { Router } from "express";
import operationController from "../../controllers/operationController.js";

const operationRouter = Router();

operationRouter.get('/',operationController.getAllOperations);
operationRouter.get('/:operationId',operationController.getOneOperation);
operationRouter.post('/', operationController.createNewOperation);
operationRouter.patch('/:operationId',operationController.updateOperation);
operationRouter.delete('/:operationId',operationController.deleteOperation);


export default operationRouter;