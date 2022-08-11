import mysql from "promise-mysql";
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewUser = async (newUser) =>{

    const query = `INSERT INTO users (name, email, password) VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}')`;

    try{
        const result = (await connection).query(query);
        return result;
    }
    catch(error){
        throw error;
    }  
}

export default {createNewUser};