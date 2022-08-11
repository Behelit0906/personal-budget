import mysql from 'mysql';
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewUser = (newUser) =>{
    connection.connect((err) => {
        if(err) throw err;
    }); 
    
    let query = `INSERT INTO users (name, email, password) VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}')`;
    
    connection.query(query, (err, result) => {
        if(err) throw err;
        return result;
    });

    connection.end();
}

export default {createNewUser};