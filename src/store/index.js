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
        githubLinks: [
          {
            linkName: 'Github Front',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
          {
            linkName: 'Github Back',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
        ],
        img: 'covoit.webp',
        projectPartenaire: [
          {
            name: 'Tristan',
            link: 'https://boudra-tristan.fr/',
          },
        ],
        projectOrigine: 'Après avoir réfléchi sur ce que l’on voulait faire, nous avons opté de partir sur la création d’une application déjà existante qui est Blablacar. Notre application a pour but d’être gratuite pour tous les utilisateurs. Ceci a pour effet de toucher une plus grande partie de la population en optant pour ce modèle économique.',
        projectObjectif: 'Créer une application ayant une excellente accessibilité pour toutes les tranches d’âge de la population. Créer des fonctionnalités et une interface ergonomique. Avoir une application simple d’utilisation.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une web app de covoiturage adapté au mobile et au PC; le but: définir un point de départ et d\'arrivée et choisir les autres utilisateurs que l’on veut prendre sur notre passage ou inversement et trouver un conducteur pour aller la on l’on souhaite.',
        foncionalites: [
          {
            for: 'Conducteur',
            foncionalitesFor: [
              { name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.' },
              { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
              { name: 'Visualiser les personnes acceptées dans son trajet, où est-ce qu’il doit le récupérer, les étapes intermédiaire' },
              { name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.' },
              { name: 'Choix du véhicule pour le voyage, ainsi que de la motorisation.' },
            ],
          },
          {
            for: 'Passager',
            foncionalitesFor: [
              { name: 'Rejoindre un voyage.' },
              { name: 'Voir l\'ensemble des voyages.' },
              { name: 'Voir toutes ces informations relatives à son compte: nom, prénom, téléphone.' },
              { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
              { name: 'Il recherche un conducteur pour faire son trajet, indique le point de départ et d’arrivée ainsi que l’horaire à laquel il part, à ce moment les trajets qui ont le même point d\'arrivée lui sont proposés.' },
              { name: 'Programmer un départ.' },
            ],
          },
        ],
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit?node-id=0%3A1',
        mcdImg: '',
        mcdLink: '',
        mldImg: '',
        mldLink: '',
        mpdImg: '',
        mpdLink: '',
        comment: '',
      },
      {
        id: 1,
        name: 'Phoenix Vêtements et Protection - Site internet',
        pathName: 'phoenix_vetements_et_protection_site_internet',
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
        website: 'http://www.phoenix-vetements.com/',
        // github: '',
        // objectif: 'Refonte complete du site de l\'entreprise Phoenix Vêtements et Protection, creation d\'une maquette..',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
        ],
        img: 'phoenix.webp',
        // projectPartenaire: [
        //   {
        //     name: '',
        //     link: '',
        //   },
        // ],
        projectOrigine: 'L\'emtreprise phoenix phetement et protection grandi et son site internet actuel demande d\'etre mintenue a jour, sont style graphique maintenent depassé et l\'entreprise na pas le temps de s\'en occupé',
        projectObjectif: 'Mettre en place un nouveau site internet dans l\'air du temps et simple d\'utilisation pour l\'emtreprise Phoenix Vetement et Protection.',
        projectDescription: 'Le nouveau site internet sera un site vitrine mettant en avant ce que fait l\'emtreprise et permetant de au client de joindre facilement Phoenix Vetement et Protection.',
        // foncionalites: [
        //   {
        //     for: 'Conducteur',
        //     foncionalitesFor: [
        //       { name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.' },
        //       { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
        //       { name: 'Visualiser les personnes acceptées dans son trajet, où est-ce qu’il doit le récupérer, les étapes intermédiaire' },
        //       { name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.' },
        //       { name: 'Choix du véhicule pour le voyage, ainsi que de la motorisation.' },
        //     ],
        //   },
        // ],
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/JkQdHhF8Tb9y4s9DAwhOYG/Stage-Phenix-vetement?node-id=115%3A114',
        // mcdImg: '',
        // mcdLink: '',
        // mldImg: '',
        // mldLink: '',
        // mpdImg: '',
        // mpdLink: '',
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
        companyName: 'Phoenix Vêtements et Protection',
        placementCity: 'Davezieux',
        placementZipCode: '07340',
        placementAdress: 'Rue des Frères Seguins',
        companyDesc: 'l\'entreprise Phoenix Vêtements et Protection fondé par Fabrice Atias en #### est speciliser dans vente de vetement et d\'equipement EPI',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12341.399133235342!2d4.693240915796706!3d45.24934182126644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee55ab29a5ed411d!2sPhoenix%20V%C3%AAtements%20et%20Protection!5e0!3m2!1sen!2sfr!4v1648500343481!5m2!1sen!2sfr',
        missions:
        [
          {
            name: 'Creation du site vitrine.',
            desc: 'Le site de l\'emtreprise se faisent viesant une refonte complete fut realisé',
            assosiedProjetPath: 'phoenix_vetements_et_protection_site_internet',
          },
        ],
        path: 'phoenix_vetements_et_protection',
        role: 'Stagiaire',
        shortDesc: 'Refonte complète du site internet de l’entreprise, creation des signatures de mail...',
        startDate: '01/01/2022',
        endDate: '02/01/2022',
      },
      {
        id: 1,
        companyName: 'WaterCollect',
        placementCity: 'Lyon - Villeurbanne',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: 'C\'est à Toulon que Thomas et Hendrix, alors étudiants en école d’ingénieurs, ont commencé à s’intéresser aux enjeux de préservation des ressources en eau.<br><br>« Nous pensons que le recyclage de l’eau est un enjeu clé du développement durable.<br><br>En effet, chaque jour de l’eau potable est gaspillée dans nos toilettes et c’est pour nous une aberration. »<br<br>>Pour y remédier ils ont fondé WaterCollect qui développe des solutions de recyclage des eaux grises domestiques.',
        localisationImgLink: '',
        localisationMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.4025433531451!2d4.871044997678743!3d45.78097000568698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd84a368148122bb8!2sWaterCollect!5e0!3m2!1sen!2sfr!4v1648502365468!5m2!1sen!2sfr',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'watercollect',
        role: 'Stagiaire',
        shortDesc: 'Création et intégration sur le site WordPresse de plusieurs simulateurs en HTML et JS et création d’un dashboard avec un côté administrateur et client accessible depuis un sous domaine du site.',
        startDate: '05/01/2021',
        endDate: '06/01/2021',
      },
      {
        id: 2,
        companyName: 'McDonald\'s',
        placementCity: 'Saint-Vallier',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'mcdonalds',
        role: 'Equipier polyvalent',
        shortDesc: 'Emploi étudiant.',
        startDate: '03/01/2021',
        endDate: '03/01/2022',
      },
      {
        id: 3,
        companyName: 'Eco Domino',
        placementCity: 'Lyon',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'eco_domino',
        role: 'Stagiaire',
        shortDesc: 'Création et utilisation d’un serveur domotique sur un raspberry utilisation de docker et Node Red pour créer des scénarios et lier les appareils de différentes marques.',
        startDate: '12/01/2019',
        endDate: '12/08/2019',
      },
      {
        id: 4,
        companyName: 'BBI informatique',
        placementCity: 'Saint-Vallier',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'bbi_informatique',
        role: 'Stagiaire',
        shortDesc: 'Utilisation de Linux, dépannage, réparation de matériel informatique, communication avec la clientèle afin de comprendre leur demande.',
        startDate: '09/01/2019',
        endDate: '10/01/2019',
      },
      {
        id: 5,
        companyName: 'Farniente Plage',
        placementCity: 'Saintes-Maries-de-la-Mer',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'farniente_plage',
        role: 'Serveur en restauration',
        shortDesc: 'Service, relationnel avec clients, gestion de la salle.',
        startDate: '07/01/2019',
        endDate: '08/01/2019',
      },
      {
        id: 6,
        companyName: 'Mairie de Saint Désirat',
        placementCity: 'Saint-Désirat',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'marie_de_saint_desirat',
        role: 'Stagiaire',
        shortDesc: 'Mise à jour du site internet, correction de bug, amélioration et optimisation de la barre de navigation et ajout d\'éléments.',
        startDate: '06/01/2019',
        endDate: '07/01/2019',
      },
      {
        id: 7,
        companyName: 'Societe dromoise de travaux SDT',
        placementCity: 'Secteur Annonay',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'societe_dromoise_de_travaux_sdt',
        role: 'Stagiaire',
        shortDesc: 'Observation de l\'installation de réseaux fibre et ADSL, branchement de jartier dans les centraux Téléphoniques et compréhension de l\'infrastructure réseau d’une ville.',
        startDate: '09/01/2018',
        endDate: '12/01/2018',
      },
      {
        id: 8,
        companyName: 'Imagine Développement',
        placementCity: 'Vienne',
        placementZipCode: '',
        placementAdress: '',
        companyDesc: '',
        localisationImgLink: '',
        localisationMapsLink: '',
        missions:
        [
          {
            name: '',
            desc: '',
            assosiedProjetPath: '',
          },
        ],
        path: 'imagine_developpement',
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
