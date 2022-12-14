import mysql from 'promise-mysql';
import config from '../config/config.js';

const connection = await mysql.createConnection(config);

const createNewOperation = async data => {
  const query = 'INSERT INTO operations (name, type, amount, date, user_id) VALUES (?,?,?,?,?)';
  await connection.query(query, data);
};

const deleteOperation = async (userId, operationId) => {
  const query = 'DELETE FROM operations WHERE id = ? AND user_id = ?';
  const result = await connection.query(query, [operationId, userId]);
  return result.affectedRows;
};

const updateOperation = async data => {
  const query = 'UPDATE operations SET name = ?, amount = ?, date = ? WHERE id = ? and user_id = ?';
  const result = await connection.query(query, data);
  return result.affectedRows;
};

const getOneOperation = async (userId, operationId) => {
  const query = 'SELECT * FROM operations WHERE id = ? and user_id = ?';
  const result = await connection.query(query, [operationId, userId]);
  return result;
};

const getAllOperations = async userId => {
  const query = 'SELECT * FROM operations WHERE user_id = ?';
  return await connection.query(query, userId);
};

const getANumberOfOperations = async data => {
  const query = 'SELECT * FROM operations WHERE user_id = ? LIMIT ?, ?';
  return await connection.query(query, data);
};

export default {
  createNewOperation,
  deleteOperation,
  updateOperation,
  getOneOperation,
  getAllOperations,
  getANumberOfOperations,
};
