import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 4 imports
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import DashBoard from '../views/DashBoard.vue';

const routes = [
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: DashBoard },
  { path: '/', redirect: '/login' } // Default route
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes
});

export default router;