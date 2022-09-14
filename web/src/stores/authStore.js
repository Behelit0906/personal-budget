import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchWrapper } from '../helpers/fetchWrapper';
import { useAlertStore } from './';
import { router } from '../router';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')));
  const returnUrl = ref(null);
  const login = async (email, password) => {
    try {
      user.value = await fetchWrapper.post(`${baseUrl}/login`, {
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(user.value));
      router.push(returnUrl.value || '/');
    } catch (error) {
      const alertStore = useAlertStore();
      alertStore.error(error);
    }
  };

  const logout = () => {
    user.value = '';
    localStorage.removeItem('user');
    router.push('/account/login');
  };

  return { user, returnUrl, login, logout };
});
