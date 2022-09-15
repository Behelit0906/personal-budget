import { defineStore } from 'pinia';
import { ref } from 'vue';

import { fetchWrapper } from '../helpers/fetchWrapper';

const baseUrl = import.meta.env.VITE_API_URL;

export const useUserStore = defineStore('user', () => {
  const register = async userData => {
    fetchWrapper.post(`${baseUrl}/users/register`, userData);
  };

  const getAllOperations = () => fetchWrapper.get(`${baseUrl}/operations/`);

  const getANumberOfOperations = (page, limit) =>
    fetchWrapper.get(`${baseUrl}/operations?page=${page}&limit=${limit}`);

  const deleteOperation = id => fetchWrapper.delete(`${baseUrl}/operations/${id}`);

  return { register, getAllOperations, getANumberOfOperations, deleteOperation };
});
