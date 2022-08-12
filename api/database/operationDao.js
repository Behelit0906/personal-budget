import mysql from "promise-mysql";
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewOperation = async (newOperation) => {
    const query = 'INSERT INTO operations (name, type, amount, date, user_id) VALUES (?,?,?,?,?)';
    const {name, type, amount, date, user_id} = newOperation;
    const values = [name, type, amount, date, user_id];

    try{
        const result = (await connection).query(query, values);
        return result;
    }
    catch(error){
        throw error;
    } 

};

export default {createNewOperation};