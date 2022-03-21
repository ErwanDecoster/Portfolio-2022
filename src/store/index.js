import { createStore } from 'vuex';

export default createStore({
  state: {
    realisation: [
      {
        id: 0,
        name: 'Covoit',
        pathName: 'covoit',
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
        // website: 'covoit.fr',
        github: 'https://github.com/ErwanDecoster/Covoit',
        img: 'covoit.webp',
        imgAlignment: 0,
        // objectif: '',
        comment: '',
      },
      {
        id: 1,
        name: 'Phoenix Vêtements et Protection',
        pathName: 'phoenix_vetements_et_protection',
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
        // github: '',
        img: 'phoenix.webp',
        imgAlignment: 1,
        objectif: '',
        comment: '',
      },
      {
        id: 2,
        name: 'WaterCollect - Dashboard',
        pathName: 'watercollect_dashboard',
        type: 'Projet prefesionnel',
        techno: [
          {
            name: 'HTML',
            color: 'E34E26',
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
        shortDesc: 'Creation d’un dashboard avec coté clients et admins',
        // website: '',
        // github: '',
        img: 'covoit.webp',
        imgAlignment: 0,
        // objectif: '',
        comment: '',
      },
      {
        id: 3,
        name: 'WaterCollect - Simulateur',
        pathName: 'watercollect_simulateur',
        type: 'Projet prefesionnel',
        techno: [
          {
            name: 'WordPress',
            color: '003C56',
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
        shortDesc: 'Ajout de diferents simulateur d’economie d’eau au site wordpresse existane ',
        // website: '',
        // github: '',
        img: 'covoit.webp',
        imgAlignment: 1,
        objectif: '',
        comment: '',
      },
    ],
    parcourt: [
      {
        id: 0,
        company: 'Phoenix Vêtements',
        placement: 'Davezieux',
        role: 'Stagiaire',
        shortDesc: 'Refonte complète du site internet de l’entreprise, creation des signatures de mail',
        startDate: '01/01/2022',
        endDate: '02/01/2022',
      },
      {
        id: 1,
        company: 'WaterCollect',
        placement: 'Lyon - Villeurbanne',
        role: 'Stagiaire',
        shortDesc: 'Création et intégration sur le site WordPresse de plusieurs simulateurs en HTML et JS et création d’un dashboard avec un côté administrateur et client accessible depuis un sous domaine du site.',
        startDate: '01/05/2021',
        endDate: '06/01/2021',
      },
      {
        id: 2,
        company: 'McDonald\'s',
        placement: 'Saint-Vallier',
        role: 'Equipier polyvalent',
        shortDesc: 'Emploi étudiant.',
        startDate: '03/01/2021',
        endDate: '03/01/2022',
      },
      {
        id: 3,
        company: 'Eco Domino',
        placement: 'Lyon',
        role: 'Stagiaire',
        shortDesc: 'Création et utilisation d’un serveur domotique sur un raspberry utilisation de docker et Node Red pour créer des scénarios et lier les appareils de différentes marques.',
        startDate: '12/01/2019',
        endDate: '12/08/2019',
      },
      {
        id: 4,
        company: 'BBI informatique',
        placement: 'Saint-Vallier',
        role: 'Stagiaire',
        shortDesc: 'Utilisation de Linux, dépannage, réparation de matériel informatique, communication avec la clientèle afin de comprendre leur demande.',
        startDate: '09/01/2019',
        endDate: '10/01/2019',
      },
      {
        id: 5,
        company: 'Farniente Plage',
        placement: 'Saintes-Maries-de-la-Mer',
        role: 'Serveur en restauration',
        shortDesc: 'Service, relationnel avec clients, gestion de la salle.',
        startDate: '07/01/2019',
        endDate: '08/01/2019',
      },
      {
        id: 6,
        company: 'Mairie de Saint Désirat',
        placement: 'Saint-Désirat',
        role: 'Stagiaire',
        shortDesc: 'Mise à jour du site internet, correction de bug, amélioration et optimisation de la barre de navigation et ajout d\'éléments.',
        startDate: '06/01/2019',
        endDate: '07/01/2019',
      },
      {
        id: 7,
        company: 'Societe dromoise de travaux SDT',
        placement: 'Secteur Annonay',
        role: 'Stagiaire',
        shortDesc: 'Observation de l\'installation de réseaux fibre et ADSL, branchement de jartier dans les centraux Téléphoniques et compréhension de l\'infrastructure réseau d’une ville.',
        startDate: '09/01/2018',
        endDate: '12/01/2018',
      },
      {
        id: 8,
        company: 'Imagine Développement',
        placement: 'Vienne',
        role: 'Stagiaire',
        shortDesc: 'Création de serveurs Windows et Linux via une machine virtuelle, essai de mise en place de GPO (stratégie de Groupe),  Création de domaines sur serveur, installation de logiciels, Préparation de commandes des clients.',
        startDate: '05/01/2018',
        endDate: '06/01/2018',
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
