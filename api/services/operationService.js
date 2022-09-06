import operationDao from '../database/operationDao.js';
import { formatter } from '../helpers/nameFormat.js';

const error = new Error('Operation could not be found');
error.name = 'No exists';

const createNewOperation = async (userId, newOperation) => {
  const data = [
    formatter(newOperation.name),
    formatter(newOperation.type),
    newOperation.amount,
    newOperation.date,
    userId,
  ];

  await operationDao.createNewOperation(data);
};

const deleteOperation = async (userId, operationId) => {
  const result = await operationDao.deleteOperation(userId, operationId);
  if (result !== 1) throw error;
};

const updateOperation = async (userId, operationData) => {
  const data = [
    formatter(operationData.name),
    operationData.amount,
    operationData.date,
    operationData.id,
    userId,
  ];

  const result = await operationDao.updateOperation(data);
  if (result !== 1) throw error;
};

const getOneOperation = async (userId, operationId) => {
  try {
    const result = await operationDao.getOneOperation(userId, operationId);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllOperations = async userId => {
  try {
    const result = await operationDao.getAllOperations(userId);
    return result;
  } catch (error) {
    throw error;
  }
};

const getANumberOfOperations = async (userId, page, limit) => {
  const startIndex = (page - 1) * limit;
  const values = [userId, startIndex, limit];

  try {
    const operations = await getAllOperations(userId);
    const numberOfPages = Math.ceil(operations.length / limit);

    const result = await operationDao.getANumberOfOperations(values);
    return { data: result, numberOfPages };
  } catch (error) {
    throw error;
  }
};

export default {
  getOneOperation,
  getAllOperations,
  createNewOperation,
  deleteOperation,
  updateOperation,
  getANumberOfOperations,
};
