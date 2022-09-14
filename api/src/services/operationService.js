import operationDao from '../database/operationDao.js';
import { formatter } from '../helpers/nameFormat.js';

const error = new Error('Operation could not be found');
error.name = 'No exists';

const createNewOperation = async newOperation => {
  const data = [
    formatter(newOperation.name),
    formatter(newOperation.type),
    newOperation.amount,
    newOperation.date,
    newOperation.userId,
  ];

  await operationDao.createNewOperation(data);
};

const deleteOperation = async (userId, operationId) => {
  const result = await operationDao.deleteOperation(userId, operationId);
  if (result !== 1) throw error;
};

const updateOperation = async operationData => {
  const data = [
    formatter(operationData.name),
    operationData.amount,
    operationData.date,
    operationData.id,
    operationData.userId,
  ];

  const result = await operationDao.updateOperation(data);
  if (result !== 1) throw error;
};

const getOneOperation = async (userId, operationId) => {
  return await operationDao.getOneOperation(userId, operationId);
};

const getAllOperations = async userId => {
  return await operationDao.getAllOperations(userId);
};

const getANumberOfOperations = async (userId, page, limit) => {
  const startIndex = (page - 1) * limit;
  const data = [userId, startIndex, limit];

  const operations = await getAllOperations(userId);
  const numberOfPages = Math.ceil(operations.length / limit);

  const result = await operationDao.getANumberOfOperations(data);
  return { data: result, numberOfPages };
};

export default {
  getOneOperation,
  getAllOperations,
  createNewOperation,
  deleteOperation,
  updateOperation,
  getANumberOfOperations,
};
