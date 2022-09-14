import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore, useAlertStore } from '../stores';
import accountRoutes from './account.routes';
import Home from '../views/Home.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { ...accountRoutes },
    // catch all redirect to home page
    { path: '/:pathMatch(.*)*', redirect: '/account/login' },
  ],
});
