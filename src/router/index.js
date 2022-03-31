import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Realisations from '../views/realisations/Realisations.vue';
import Realisation from '../views/realisations/Realisation.vue';

// import Parcourts from '../views/parcourts/Parcourts.vue';
import Parcourt from '../views/parcourts/Parcourt.vue';
import Contact from '../views/Contact.vue';
import ErrorPage from '../views/ErrorPage.vue';

function removeHash(to) {
  console.log(to);
  // console.log(getRoutes());
  // if (to.hash) return { path: to.path, query: to.query, hash: '' };
  // return false;
}
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
      transition: 'slide-left',
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
    path: '/:catchAll(.*)',
    name: '',
    component: ErrorPage,
    meta: {
      title: 'Erreur 404',
    },
  },
];

const router = createRouter({
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(to) {
    // console.log(to, from, savedPosition);
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
router.beforeEach((to) => {
  removeHash(to);
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
  // const toDepth = to.path.split('/').length;
  // const fromDepth = from.path.split('/').length;
  // to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
  // console.log(to.meta.transitionName);
});

export default router;
