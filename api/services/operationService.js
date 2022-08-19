import operationDao from '../database/operationDao.js';
import { formatter } from "../helpers/nameFormat.js";

const createNewOperation = async (userId, newOperation) => {

    newOperation.name = formatter(newOperation.name);
    
    try{
        const result = await operationDao.createNewOperation(userId, newOperation);
        if(result != 1){
            throw error;
        }
        
    }
    catch(error){
        throw error;
    }
};

const deleteOperation = async (userId, operationId) => {
    try{
        const result = await operationDao.deleteOperation(userId, operationId);
        if(result != 1){
            throw error;
        }
    }
    catch(error){
        throw error;
    }
};

const updateOperation = async (userId, operationData) => {
    operation.name = formatter(operation.name);
    try{
        const result = await operationDao.updateOperation(userId, operationData);
        if(result != 1){
            throw error;
        }
    }
    catch(error){
        throw error;
    }
}

const getOneOperation = async (userId, operationId) => {
    try{
        const result = await operationDao.getOneOperation(userId, operationId);
        return result;
    }
    catch(error){
        throw error;
    }

};

const getAllOperations = async (userId) => {
    try{
        const result = await operationDao.getAllOperations(userId);
        return result;
    }
    catch(error){
        throw error;
    }
};

export default {getOneOperation, getAllOperations, createNewOperation, deleteOperation, updateOperation};

