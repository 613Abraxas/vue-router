import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Box from '../views/Box.vue';

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/box/:id', 
    component: Box 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
