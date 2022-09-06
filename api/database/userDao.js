import mysql from 'promise-mysql';
import config from '../config/config.js';

const connection = await mysql.createConnection(config);

const createNewUser = async newUser => {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  await connection.query(query, newUser);
};

const findUserByEmail = async email => {
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const result = await connection.query(query);
  return result;
};

export default { createNewUser, findUserByEmail };
