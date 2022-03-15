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
        imgAlignment: 0,
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
        imgAlignment: 1,
        objectif: '',
        comment: '',
      },
      {
        name: 'WaterCollect - Dashboard',
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
        objectif: '',
        comment: '',
      },
      {
        name: 'WaterCollect -  Simulateur',
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
        company: 'Phoenix Vêtements',
        placement: 'Davezieux',
        role: 'Stagiaire',
        shortDesc: 'Refonte complète du site internet de l’entreprise',
        startDate: '01/01/2022',
        endDate: '01/02/2022',
      },
      {
        company: 'WaterCollect',
        placement: 'Villeurbanne',
        role: 'Stagiaire',
        shortDesc: 'Création et intégration sur le site WordPresse de plusieurs simulateurs  en HTML et JS  et création d’un dashboard avec un côté administrateur et client accessible depuis un sous domaine du site.',
        startDate: '01/05/2021',
        endDate: '01/06/2021',
      },
      {
        company: 'McDonald\'s',
        placement: 'Saint-Vallier',
        role: 'Equipier polyvalent',
        shortDesc: 'Emploi étudiant.',
        startDate: '01/03/2021',
        endDate: '01/03/2022',
      },
      {
        company: 'Eco Domino',
        placement: 'Lyon',
        role: 'Stagiaire',
        shortDesc: 'Création et utilisation d’un serveur domotique sur un raspberry utilisation de docker et Node Red pour créer des scénarios et lier les appareils de différentes marques.',
        startDate: '01/12/2019',
        endDate: '08/12/2019',
      },
      {
        company: 'BBI informatique',
        placement: 'Saint-Vallier',
        role: 'Stagiaire',
        shortDesc: 'Utilisation de Linux, dépannage, réparation de matériel informatique, communication avec la clientèle afin de comprendre leur demande.',
        startDate: '01/09/2019',
        endDate: '01/10/2019',
      },
      {
        company: 'Farniente Plage',
        placement: 'Saintes-Maries-de-la-Mer',
        role: 'Serveur en restauration',
        shortDesc: 'Service, relationnel avec clients, gestion de la salle.',
        startDate: '01/07/2019',
        endDate: '01/08/2019',
      },
      {
        company: 'Mairie de Saint Désirat',
        placement: 'Saint-Désirat',
        role: 'Stagiaire',
        shortDesc: 'Mise à jour du site internet, correction de bug, amélioration et optimisation de la barre de navigation et ajout d\'éléments.',
        startDate: '01/06/2019',
        endDate: '01/07/2019',
      },
      {
        company: 'Societe dromoise de travaux SDT',
        placement: 'Secteur Annonay',
        role: 'Stagiaire',
        shortDesc: 'Observation de l\'installation de réseaux fibre et ADSL, branchement de jartier dans les centraux Téléphoniques et compréhension de l\'infrastructure réseau d’une ville.',
        startDate: '01/09/2018',
        endDate: '01/12/2018',
      },
      {
        company: 'Imagine Développement',
        placement: 'Vienne',
        role: 'Stagiaire',
        shortDesc: 'Création de serveurs Windows et Linux via une machine virtuelle, essai de mise en place de GPO (stratégie de Groupe),  Création de domaines sur serveur, installation de logiciels, Préparation de commandes des clients.',
        startDate: '01/05/2018',
        endDate: '01/06/2018',
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
