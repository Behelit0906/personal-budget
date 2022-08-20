import operationService from "../services/operationService.js";

const createNewOperation = async (req, res) => {
    const newOperation = req.body;
    try{
        await operationService.createNewOperation(8, newOperation);
        res.status(200).send();
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'exists'){
            errorCode = 409;
            message = error.message;
        }
        else{
            errorCode = 500;
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }

};

const deleteOperation = async (req, res) => {
    const operationId = req.params.operationId;
    const userId = 8;
    try{
        await operationService.deleteOperation(userId, operationId);
        res.status(200).send();
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'exists'){
            errorCode = 409;
            message = error.message;
        }
        else{
            errorCode = 500;
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }

};

const updateOperation = async (req, res) => {

    let operationId = req.params.operationId;
    if(isNaN(operationId)) return res.status(400).send({message:"Invalid operation id"});
    operationId = parseInt(operationId);
    const operationData = req.body;
    const {userId} = req.body;
    delete operationData.userId;
    operationData.id = operationId;


    try{
        await operationService.updateOperation(userId, operationData);
        res.status(200).send();
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'No exists'){
            errorCode = 404;
            message = error.message;
        }
        else{
            errorCode = 500;
            console.log(error);
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }
};

const getOneOperation = async (req, res) => {
    let operationId = req.params.operationId;
    if(isNaN(operationId)) return res.status(400).send({message:"Invalid operation id"});
    operationId = parseInt(operationId);

    const {userId} = req.body; 
    try{
        const result = await operationService.getOneOperation(userId,operationId);
        res.status(200).send({data:result});
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'exists'){
            errorCode = 409;
            message = error.message;
        }
        else{
            errorCode = 500;
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }
};

const getAllOperations = async (req, res) => {
    const {userId} = req.body;
    try{
        const result = await operationService.getAllOperations(userId);
        res.status(200).send({data:result});
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'exists'){
            errorCode = 409;
            message = error.message;
        }
        else{
            errorCode = 500;
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }
};

export default {createNewOperation, deleteOperation, updateOperation, getOneOperation, getAllOperations};