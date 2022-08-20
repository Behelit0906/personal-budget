import mysql from "promise-mysql";
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewOperation = async (userId, newOperation) => {
    const query = 'INSERT INTO operations (name, type, amount, date, user_id) VALUES (?,?,?,?,?)';
    const {name, type, amount, date} = newOperation;
    const values = [name, type, amount, date, userId];

    try{
        const result = await (await connection).query(query, values);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    } 

};

const deleteOperation = async (userId, operationId) => {
    const query = 'DELETE FROM operations WHERE id = ? AND user_id = ?';
    try{
        const result = await (await connection).query(query, [operationId, userId]);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    }
};

const updateOperation = async (userId, operationData) => {
    const query = `UPDATE operations SET name = ?, amount = ?, date = ? WHERE id = ${operationData.id} and user_id=${userId}`;
    const {name, amount, date} = operationData;
    const values = [name, amount, date];

    try{
        const result = await (await connection).query(query, values);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    }

};

const getOneOperation = async (userId, operationId) => {
    const query = 'SELECT id, name, type, amount, date FROM operations WHERE id = ? and user_id=?';
    try{
        const result = await (await connection).query(query, [operationId, userId]);
        return result;
    }
    catch(error){
        throw error;
    }
}

const getAllOperations = async (userId) => {
    const query = 'SELECT id, name, type, amount, date FROM operations WHERE user_id = ?';
    try{
        const result = await (await connection).query(query, userId);
        return result;
    }
    catch(error){
        throw error;
    }
}

export default {
    createNewOperation, 
    deleteOperation, 
    updateOperation, 
    getOneOperation,
    getAllOperations
};