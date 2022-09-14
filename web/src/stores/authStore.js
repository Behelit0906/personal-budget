import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchWrapper } from "./helpers/fetchWrapper";
import { router } from "./router";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore("auth", () => {
  const user = ref("");
  const returnUrl = ref(null);
});
