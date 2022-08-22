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
    operationData.name = formatter(operationData.name);
    try{
        const result = await operationDao.updateOperation(userId, operationData);
        if(result != 1){
            const error = new Error('Operation could not be found');
            error.name = 'No exists';
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

const getANumberOfOperations = async (userId, page, limit) => {

    const startIndex = (page - 1)*limit;
    const values = [userId, startIndex, limit];
    
    try{
        const operations = await getAllOperations(userId);
        const numberOfPages = Math.ceil(operations.length / limit);
        
        const result = await operationDao.getANumberOfOperations(values);
        return {data:result, numberOfPages:numberOfPages};
    }
    catch(error){
        throw error;
    }

};

export default {
    getOneOperation, 
    getAllOperations, 
    createNewOperation, 
    deleteOperation, 
    updateOperation,
    getANumberOfOperations
};

