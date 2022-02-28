import { createStore } from 'vuex';

export default createStore({
  state: {
    realisation: [
      {
        name: 'Covoit',
        type: 'Projet d\'etude',
        techno: [
          {
            name: 'Vue.js',
            color: '43B983',
          },
          {
            name: 'tailwindcss',
            color: '39BDF8',
          },
          {
            name: 'CSS',
            color: '0270BA',
          },
          {
            name: 'PHP',
            color: '777BB3',
          },
          {
            name: 'MYSQL',
            color: 'F29112',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
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
          {
            name: 'Vue.js',
            color: '43B983',
          },
          {
            name: 'tailwindcss',
            color: '39BDF8',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
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
          {
            name: 'PHP',
            color: '777BB3',
          },
          {
            name: 'MYSQL',
            color: 'F29112',
          },
          {
            name: 'HTML',
            color: 'E34E26',
          },
          {
            name: 'CSS',
            color: '0270BA',
          },
          {
            name: 'JS',
            color: 'EBD41C',
          },
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
