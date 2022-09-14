import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore, useAlertStore } from '../stores';
import accountRoutes from './account.routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { ...accountRoutes },
    // catch all redirect to home page
    { path: '/:pathMatch(.*)*', redirect: '/account/login' },
  ],
});
