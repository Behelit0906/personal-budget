import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchWrapper } from "./helpers/fetchWrapper";
import { useAlertStore } from "./stores";
import { router } from "./router";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore("auth", () => {
  const user = ref("");
  const returnUrl = ref(null);

  const login = async (email, password) => {
    try {
      user = await fetchWrapper.post(`${baseUrl}/login`, {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(user));
      router.push(this.returnUrl || "/");
    } catch (error) {
      const alertStore = useAlertStore();
      alertStore.error(error);
    }
  };

  const logout = () => {
    user = "";
    localStorage.removeItem("user");
    router.push("/account/login");
  };

  return { user, returnUrl, login, logout };
});
