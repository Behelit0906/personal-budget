import { Router } from "express";
import operationController from "../../controllers/operationController.js";

const operationRouter = Router();

operationRouter.get('/:id',operationController.getOneOperation);
operationRouter.get('/',operationController.getAllOperations);
operationRouter.post('/save', operationController.createNewOperation);
operationRouter.post('/update',operationController.updateOperation);
operationRouter.get('/delete/:id',operationController.deleteOperation);


export default operationRouter;