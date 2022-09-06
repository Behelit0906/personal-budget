import mysql from 'promise-mysql';
import config from '../config/config.js';

const connection = mysql.createConnection(config);

const createNewOperation = async data => {
  const query = 'INSERT INTO operations (name, type, amount, date, user_id) VALUES (?,?,?,?,?)';
  await (await connection).query(query, data);
};

const deleteOperation = async (userId, operationId) => {
  const query = 'DELETE FROM operations WHERE id = ? AND user_id = ?';
  const result = await (await connection).query(query, [operationId, userId]);
  return result.affectedRows;
};

const updateOperation = async (userId, operationData) => {
  const query = 'UPDATE operations SET name = ?, amount = ?, date = ? WHERE id = ? and user_id = ?';
  const { name, amount, date, id } = operationData;
  const values = [name, amount, date, id, userId];

  try {
    const result = await (await connection).query(query, values);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

const getOneOperation = async (userId, operationId) => {
  const query = 'SELECT id, name, type, amount, date FROM operations WHERE id = ? and user_id=?';
  try {
    const result = await (await connection).query(query, [operationId, userId]);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllOperations = async userId => {
  const query = 'SELECT id, name, type, amount, date FROM operations WHERE user_id = ?';
  try {
    const result = await (await connection).query(query, userId);
    return result;
  } catch (error) {
    throw error;
  }
};

const getANumberOfOperations = async values => {
  const query = 'SELECT id, name, type, amount, date FROM operations WHERE user_id = ? LIMIT ?,?';
  try {
    const result = await (await connection).query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  createNewOperation,
  deleteOperation,
  updateOperation,
  getOneOperation,
  getAllOperations,
  getANumberOfOperations,
};
