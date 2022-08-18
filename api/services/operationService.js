import operationDao from '../database/operationDao.js';
import { formatter } from "../helpers/nameFormat.js";

const createNewOperation = async (newOperation) => {

    newOperation.name = formatter(newOperation.name);
    
    try{
        const result = await operationDao.createNewOperation(newOperation);
        if(result != 1){
            throw error;
        }
        
    }
    catch(error){
        throw error;
    }
};

const deleteOperation = async (id) => {
    try{
        const result = await operationDao.deleteOperation(id);
        if(result != 1){
            throw error;
        }
    }
    catch(error){
        throw error;
    }
};

const updateOperation = async (operation) => {
    operation.name = formatter(operation.name);
    try{
        const result = await operationDao.updateOperation(operation);
        if(result != 1){
            throw error;
        }
    }
    catch(error){
        throw error;
    }
}

const getOneOperation = async (id) => {
    try{
        const result = await operationDao.getOneOperation(id);
        return result;
    }
    catch(error){
        throw error;
    }

};

const getAllOperations = async () => {
    try{
        const result = await operationDao.getAllOperations();
        return result;
    }
    catch(error){
        throw error;
    }
};

