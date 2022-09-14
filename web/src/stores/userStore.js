import { defineStore } from 'pinia';
import { ref } from 'vue';

import { fetchWrapper } from '../helpers/fetchWrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUserStore = defineStore('user', () => {
  const register = async userData => {
    fetchWrapper.post(`${baseUrl}/register`, userData);
  };

  return { register };
});
