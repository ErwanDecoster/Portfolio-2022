import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Realisations from '../views/realisations/Realisations.vue';
import Realisation from '../views/realisations/Realisation.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/realisations',
    name: 'realisations',
    component: Realisations,
  },
  {
    path: '/realisations/:name',
    name: 'realisation',
    component: Realisation,
  },
  {
    path: '/:catchAll(.*)',
    name: '',
    // component: ErrorPage,
    meta: {
      title: 'Erreur 404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
