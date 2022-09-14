import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alert', () => {
  const alert = ref(null);

  const success = message => (alert.value = { message, type: 'alert-success' });

  const error = message => (alert.value = { message, type: 'alert-danger' });

  const clear = () => (alert.value = null);

  return { alert, success, error, clear };
});
