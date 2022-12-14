import { defineStore } from 'pinia';
import { ref } from 'vue';

import { fetchWrapper } from '../helpers/fetchWrapper';

const baseUrl = import.meta.env.VITE_API_URL;

export const useUserStore = defineStore('user', () => {
  const register = async userData => fetchWrapper.post(`${baseUrl}/users/register`, userData);

  const getAllOperations = () => fetchWrapper.get(`${baseUrl}/operations/`);

  const getOperationById = id => fetchWrapper.get(`${baseUrl}/operations/${id}`);

  const getANumberOfOperations = (page, limit) =>
    fetchWrapper.get(`${baseUrl}/operations/paginate?page=${page}&limit=${limit}`);

  const deleteOperation = id => fetchWrapper.delete(`${baseUrl}/operations/${id}`);

  const createOperation = operationData =>
    fetchWrapper.post(`${baseUrl}/operations/`, operationData);

  const updateOperation = (id, operationData) =>
    fetchWrapper.patch(`${baseUrl}/operations/${id}`, operationData);

  return {
    register,
    getAllOperations,
    getOperationById,
    getANumberOfOperations,
    deleteOperation,
    createOperation,
    updateOperation,
  };
});
