import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Box from '../components/Box.vue';

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
