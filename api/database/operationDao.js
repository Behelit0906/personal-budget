import mysql from "promise-mysql";
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewOperation = async (newOperation) => {
    const query = 'INSERT INTO operations (name, type, amount, date, user_id) VALUES (?,?,?,?,?)';
    const {name, type, amount, date, user_id} = newOperation;
    const values = [name, type, amount, date, user_id];

    try{
        const result = await (await connection).query(query, values);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    } 

};

const deleteOperation = async (id) => {
    const query = 'DELETE FROM operations WHERE id = ?';
    try{
        const result = await (await connection).query(query, id);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    }
};

const updateOperation = async (operation) => {
    const query = `UPDATE operations SET name = ?, amount = ?, date = ? WHERE id = ${operation.id}`;
    const {name, amount, date} = operation;
    const values = [name, amount, date];

    try{
        const result = await (await connection).query(query, values);
        return result.affectedRows;
    }
    catch(error){
        throw error;
    }

};

const getOneOperation = async (id) => {
    const query = 'SELECT * FROM operations WHERE id = ?';
    try{
        const result = await (await connection).query(query, id);
        return result;
    }
    catch(error){
        throw error;
    }
}

const getAllOperations = async () => {
    const query = 'SELECT * FROM operations';
    try{
        const result = await (await connection).query(query);
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