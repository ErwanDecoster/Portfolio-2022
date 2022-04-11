import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Realisations from '../views/realisations/Realisations.vue';
import Realisation from '../views/realisations/Realisation.vue';
import Parcourt from '../views/parcourts/Parcourt.vue';
import Contact from '../views/Contact.vue';
import LegalNotice from '../views/LegalNotice.vue';
import ErrorPage from '../views/ErrorPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Erwan Decoster',
      transition: 'slide-right',
    },
  },
  {
    path: '/realisations',
    name: 'realisations',
    component: Realisations,
    meta: {
      title: 'Realisations',
      // transition: 'slide-right',
    },
    // beforeEnter: removeHash,
  },
  {
    path: '/realisations/:name',
    name: 'realisation',
    component: Realisation,
    meta: {
      title: 'Realisation',
      transition: 'slide-left',
    },
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
    meta: {
      title: 'Parcourt',
      transition: 'slide-left',
    },
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact',
      transition: 'slide-left',
    },
  },
  {
    path: '/Mensions_Legal',
    name: 'Mensions Legal',
    component: LegalNotice,
    meta: {
      title: 'Mensions Legal',
      transition: 'slide-left',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '',
    component: ErrorPage,
    meta: {
      title: 'Erreur 404',
    },
  },
];

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    // return false;
    // return savedPosition || { top: 0 };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  if (to.params.name) {
    document.title = `${to.meta.title} - ${to.params.name}`;
  } else if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Erwan Decoster';
  }
  /* eslint no-param-reassign: "error" */
});

export default router;
