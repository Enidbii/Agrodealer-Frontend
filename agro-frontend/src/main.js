import { createApp } from 'vue'; // Vue 3 import
import App from './App.vue';
import router from './router'; // Import the router

createApp(App)
  .use(router) // Use the router
  .mount('#app');
