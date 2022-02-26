import { createStore } from 'vuex';

export default createStore({
  state: {
    realisation: [
      {
        name: 'Covoit',
        type: 'Projet d\'etude',
        techno: [
          { name: 'Vue.js' },
          { name: 'tailwindcss' },
          { name: 'CSS' },
          { name: 'PHP' },
          { name: 'MYSQL' },
          { name: 'JS' },
        ],
        shortDesc: 'Web App de covoiturage',
        website: 'covoit.fr',
        github: 'https://github.com/ErwanDecoster/Covoit',
        img: 'covoit.webp',
        objectif: '',
        comment: '',
      },
      {
        name: 'Phoenix Vêtements et Protection',
        type: 'Projet prefesionnel',
        techno: [
          { name: 'Vue.js' },
          { name: 'tailwindcss' },
          { name: 'JS' },
        ],
        shortDesc: 'Site vitrine de l’entreprise Phoenix Vêtements et Protection',
        website: 'http://phoenix-vetements.com/',
        github: '',
        img: 'phoenix.webp',
        objectif: '',
        comment: '',
      },
      {
        name: 'WaterCollect - Dashboard',
        type: 'Projet prefesionnel',
        techno: [
          { name: 'PHP' },
          { name: 'MYSQL' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'JS' },
        ],
        shortDesc: 'Creation d’un dashboard avec coté clients et admins',
        // website: '',
        // github: '',
        img: 'covoit.webp',
        objectif: '',
        comment: '',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
