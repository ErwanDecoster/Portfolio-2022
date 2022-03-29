import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Realisations from '../views/realisations/Realisations.vue';
import Realisation from '../views/realisations/Realisation.vue';

// import Parcourts from '../views/parcourts/Parcourts.vue';
import Parcourt from '../views/parcourts/Parcourt.vue';
import Contact from '../views/Contact.vue';

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
  // {
  //   path: '/parcourts',
  //   name: 'parcourts',
  //   component: Parcourts,
  // },
  {
    path: '/parcourts/:name',
    name: 'parcourt',
    component: Parcourt,
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact,
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
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    // return false;
    return savedPosition || { top: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
