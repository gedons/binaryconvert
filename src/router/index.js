import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Index.vue';
import Conveter from '../views/Conveter.vue';
 

const routes = [
  { path: '/', component: Home },
  { path: '/converter', component: Conveter },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

 

export default router;
