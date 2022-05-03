<template>
  <main class="w-full">
    <section class="h-[90vh] py-60">
      <div class="flex gap-8 max-w-screen-lg mx-auto px-3">
        <ul class="pt-4 flex flex-col gap-4">
          <li>
            <a class="hover:fill-blue-600 transition-colors duration-150" href="https://github.com/ErwanDecoster" target="_blank">
              <svg class="h-8 w-8 ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Github</title>
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="hover:fill-blue-600 transition-colors duration-150" href="https://www.linkedin.com/in/erwan-decoster/" target="_blank">
              <svg class="h-8 w-8 ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Linkedin</title>
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="hover:fill-blue-600 transition-colors duration-150" href="https://twitter.com/erwan0711" target="_blank">
              <svg class="h-8 w-8 ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Twitter</title>
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>
              </svg>
            </a>
          </li>
        </ul>
        <div class="flex flex-col gap-6">
          <h1 class="text-5xl md:text-7xl font-semibold text-left flex flex-col gap-4">
            <span>Decoster</span>
            <span>Erwan</span>
          </h1>
          <router-link :to="{ name: 'home', hash: '#contact_form'}" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">Me contacter</router-link>
        </div>
        <svg class="hidden sm:block" width="202" height="201" viewBox="0 0 202 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_102_73)">
            <path d="M109.619 52.0671C114.653 46.7624 123.542 48.8964 125.619 55.9083L148.097 131.793C150.174 138.805 143.881 145.435 136.77 143.728L59.8134 125.253C52.7024 123.545 50.1061 114.78 55.1401 109.476L109.619 52.0671Z" stroke="#275DE7" stroke-width="5" shape-rendering="geometricPrecision"/>
          </g>
          <defs>
            <filter id="filter0_d_102_73" x="0.0224609" y="0.600342" width="200.979" height="199.902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="25"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.153206 0 0 0 0 0.363475 0 0 0 0 0.904167 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_73"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_73" result="shape"/>
            </filter>
          </defs>
        </svg>
        <svg class="hidden sm:block" width="241" height="245" viewBox="0 0 241 245" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_102_74)">
            <path d="M94.5434 51.9336L185.147 133.513C190.582 138.407 188.681 147.348 181.726 149.608L65.7739 187.283C58.8188 189.543 52.0254 183.427 53.5459 176.273L78.8943 57.0183C80.4148 49.865 89.1087 47.0402 94.5434 51.9336Z" stroke="#275DE7" stroke-width="5" shape-rendering="geometricPrecision"/>
          </g>
          <defs>
            <filter id="filter0_d_102_74" x="0.828613" y="0.983542" width="239.967" height="243.28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.153206 0 0 0 0 0.363475 0 0 0 0 0.904167 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_74"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_74" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
    </section>
    <section class="py-16" id="a_propos_de_moi">
      <div class="max-w-screen-lg mx-auto px-3">
        <h2 class="text-3xl font-bold text-center mx-auto">A propos de moi</h2>
        <div class="grid md:grid-cols-2 gap-16">
          <img class="w-96 rounded-3xl mx-auto object-top object-cover h-96 my-16" src="@/assets/profil_picture.webp" alt="">
          <div class="grid gap-12 py-16">
            <p class="text-xl text-left text-gray-500 ">Étudiant en developement dans le secteur de Lyon, grand passionné de nouvelles technologies et de design, je realise pour vous votre site web.</p>
            <ul class="flex justify-around">
              <li class="grid gap-2">
                <p class="font-bold text-3xl text-center">10+</p>
                <p class="text-gray-500 sm:w-32 text-center">projets completés</p>
              </li>
              <li class="grid gap-2">
                <p class="font-bold text-3xl text-center">6+</p>
                <p class="text-gray-500 sm:w-32 text-center">stages en entreprise</p>
              </li>
              <li class="grid gap-2">
                <p class="font-bold text-3xl text-center">4+</p>
                <p class="text-gray-500 sm:w-32 text-center">clients satisfaits</p>
              </li>
            </ul>
            <div class="flex gap-4">
              <router-link to="/" class="h-fit px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">
                Telecharger CV
                <img class="ml-2 h-6 w-6" src="@/assets/download-outline.svg" alt="">
              </router-link>
              <router-link :to="{ name: 'home', hash: '#contact_form'}" class="h-fit px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">Me contacter</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-16" id="realisations">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Réalisations</h2>
        <div class="flex flex-col gap-20" >
          <div v-for="row in Realisation" v-bind:key="row" class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Realisation :data="row" />
          </div>
        </div>
        <router-link to="/realisations" class="mx-auto px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 rounded-xl flex items-center w-fit">Voir toutes les réalisations</router-link>
      </div>
    </section>
    <section class="min-h-screen py-16" id="parcourts">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12 scroll-mt-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Parcours</h2>
        <div class="flex flex-col gap-20" :style="{ 'padding-top': (125 + ySpacing / 2 - 30) + 'px' }">
          <span id="span" class="absolute rounded-full z-10 bg-blue-600 shadow-md shadow-blue-600/50 w-10 h-10 left-0" :style="{ 'margin-top': -(200 + ySpacing / 2 - 30) + 'px' }"></span>
          <svg ref="svg" id="svg" height="3000" :style="{ 'margin-top': -(200 + ySpacing / 2 - 30) + 'px' }" stroke-dasharray="14" stroke-linecap="round" class="absolute left-0 pointer-events-none"></svg>
          <div class="z-10 absolute overflow-hidden border-2 bg-blue-600 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl w-fit -mt-32 left-1/2 -translate-x-1/2 grid grid-cols-2">
            <div class="px-5 py-2 cursor-pointer duration-150 hover:bg-blue-500 hover:text-white" :class="[{'bg-blue-600 text-white': (selectedParcourt === true)},{'bg-white': (selectedParcourt === false)}]" @click="selectedParcourt = !selectedParcourt; UpdatePointRepeat()">
              <p class="font-bold text-center">Profesionnel</p>
            </div>
            <div class="px-5 py-2 cursor-pointer duration-150 hover:bg-blue-500 hover:text-white" :class="[{'bg-blue-600 text-white': (selectedParcourt === false)},{'bg-white': (selectedParcourt === true)}]" @click="selectedParcourt = !selectedParcourt; UpdatePointRepeat()">
              <p class="font-bold text-center">Educatif</p>
            </div>
          </div>
          <div class="relative w-full">
            <div class="flex flex-col gap-2 duration-150" :style="{ gap: ySpacing - 50 + 'px' }" :class="{ '-translate-x-[100vw] hidden': (selectedParcourt === false) }" >
              <div v-for="row in parcourtProfesionnel" :key="row" class="bg-white border-2 z-10 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl max-w-lg p-3 flex flex-col justify-between" :style="{ height: ySpacing + 50 + 'px' }" :class="[{ 'sm:ml-auto': (row.id % 2 !== 0) },{ 'sm:mr-auto': (row.id % 2 === 0)}]">
                <div class="flex flex-col">
                  <h3 class="font-bold text-lg md:text-xl">{{ row.companyName }} - <span class="font-light">{{ row.role }}</span></h3>
                  <p class="text-sm">{{ row.placementCity }}</p>
                  <p class="text-ellipsis overflow-hidden h-[72px]">{{ row.shortDesc }}</p>
                </div>
                <router-link :to="{ name: 'parcourt', params: { name: row.path }}" class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">Plus d'information</router-link>
              </div>
            </div>
            <div class="flex flex-col gap-2 duration-150" :style="{ gap: ySpacing - 50 + 'px' }" :class="{ 'translate-x-[100vw] hidden': (selectedParcourt === true) }">
              <div v-for="row in parcourtEducatif" :key="row" class="bg-white border-2 z-10 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl max-w-lg p-3 flex flex-col justify-between" :style="{ height: ySpacing + 50 + 'px' }" :class="[{ 'sm:ml-auto sm:mr-32 ': (row.id % 2 !== 0) },{ 'sm:mr-auto sm:ml-32 ': (row.id % 2 === 0)}]">
                <div class="flex flex-col">
                  <h3 class="font-bold text-xl md:text-xl">{{ row.diplome }}</h3>
                  <h4 v-if="row.mension" class="text-md">Mension {{ row.mension }}</h4>
                  <h4 class="text-md">{{ row.companyName }} - {{ row.placementCity }}</h4>
                  <p>{{ formatDatesYears(row.startDate, row.endDate) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="contact_form">
      <ContactForm />
    </div>
  </main>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
import Realisation from '@/components/Realisation.vue';

export default {
  name: 'Home',
  data() {
    return {
      selectedParcourt: true,
      width: '',
      height: 6000,
      svgelement: '',
      // pointsRepeat: this.$store.state.parcourtProfesionnel.length,
      // pointsRepeat: 3,
      pointsRepeat: (this.selectedParcourt ? this.$store.state.parcourtEducatif.length : this.$store.state.parcourtProfesionnel.length),
      ySpacing: 150,
    };
  },
  components: {
    Footer,
    ContactForm,
    Realisation,
  },
  methods: {
    // RemoveHash() {
    //   window.location.hash = '';
    // },
    UpdatePointRepeat() {
      this.pointsRepeat = (this.selectedParcourt ? this.$store.state.parcourtProfesionnel.length : this.$store.state.parcourtEducatif.length);
      const element = document.getElementById('svg');
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.style.width = `${this.width}px`;
      this.CalcPoints(this.pointsRepeat, 0, this.width / 6, this.ySpacing);
    },
    Random(range) {
      return -range / 2 + Math.floor(Math.random() * range);
    },
    DrawBezier(pathString, stroke) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttributeNS(null, 'd', pathString);
      path.setAttributeNS(null, 'stroke', stroke);
      path.setAttributeNS(null, 'fill', 'transparent');
      path.setAttributeNS(null, 'stroke-width', '4px');
      document.getElementById('svg').appendChild(path);
    },
    GeneratePath(points) {
      let type = null;
      if (points.length === 3) {
        type = 'Q';
      } else if (points.length === 4) {
        type = 'C';
      } else if (points.length % 2 === 0) {
        type = 'C';
      } else {
        throw new Error('Number of points must be 3 or an even number more than 3');
      }
      const pathPoints = ['M ', points[0][0], ',', points[0][1], type];
      for (let p = 1, l = points.length; p < l; p += 1) {
        if (p >= 4 && p % 2 === 0) {
          pathPoints.push('S');
        }
        pathPoints.push(points[p][0]);
        pathPoints.push(',');
        pathPoints.push(points[p][1]);
      }
      return pathPoints.join(' ');
    },
    formatDatesYears(startDate, endDate) {
      const dateStartDate = new Date(startDate);
      const dateEndDate = new Date(endDate);
      const startDateYear = dateStartDate.getFullYear();
      const endDateYear = dateEndDate.getFullYear();
      return `${startDateYear} - ${endDateYear}`;
    },
    formatDates(startDate, endDate) {
      const dateStartDate = new Date(startDate);
      const dateEndDate = new Date(endDate);
      const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
      // const dateNumber = date.getDate();
      const startDateMouthName = months[dateStartDate.getMonth()];
      const endDateMouthName = months[dateEndDate.getMonth()];
      const startDateYear = dateStartDate.getFullYear();
      const endDateYear = dateEndDate.getFullYear();
      if (startDateYear === endDateYear) {
        if (startDateMouthName === endDateMouthName) {
          return `${startDateMouthName} ${startDateYear}`;
        }
        return `${startDateMouthName} - ${endDateMouthName} ${startDateYear}`;
      }
      return `${startDateMouthName} ${startDateYear} - ${endDateMouthName} ${endDateYear}`;
    },
    // DrawPoints(points, colour) {
    //   points.forEach((point) => {
    //     const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //     circle.setAttributeNS(null, 'cx', point[0]);
    //     circle.setAttributeNS(null, 'cy', point[1]);
    //     circle.setAttributeNS(null, 'r', 6);
    //     circle.setAttributeNS(null, 'fill', colour);
    //     document.getElementById('svg').appendChild(circle);
    //   });
    // },
    DrawPoint(point, Xposition, Yposition) {
      const colour = '#2563EB';
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttributeNS(null, 'cx', point[0]);
      circle.setAttributeNS(null, 'cy', point[1]);
      circle.setAttributeNS(null, 'r', 10);
      circle.setAttributeNS(null, 'fill', colour);
      setTimeout(() => {
        document.getElementById('svg').appendChild(circle);
        if (this.selectedParcourt === true) {
          if (Xposition === 1) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', point[0] + 20);
            text.setAttributeNS(null, 'y', point[1] + 5);
            text.classList = 'text-lg text-black font-bold';
            text.textContent = this.formatDates(this.parcourtProfesionnel[Yposition].startDate, this.parcourtProfesionnel[Yposition].endDate);
            document.getElementById('svg').appendChild(text);
          } else {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'y', point[1] + 5);
            text.classList = 'text-lg text-black font-bold';
            text.textContent = this.formatDates(this.parcourtProfesionnel[Yposition].startDate, this.parcourtProfesionnel[Yposition].endDate);
            document.getElementById('svg').appendChild(text);
            text.setAttributeNS(null, 'x', point[0] - 20 - text.getBBox().width);
          }
        }
      }, 100);
    },
    CalcPoints(repeat, randRange, xSpacing, ySpacing) {
      let points = `[[0,0][${this.width / 4},50]`;
      let i = 0;
      let ii = 1;
      for (; i < repeat; i += 1, ii += 2) {
        if (i % 2 === 0) {
          points += `[${this.width / 2 + xSpacing + this.Random(randRange)},${ii * ySpacing + 50 + this.Random(randRange)}]`;
          points += `[${this.width / 2 + xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`;
          this.DrawPoint(JSON.parse(`[${this.width / 2 + xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`), 1, i);
        } else {
          points += `[${this.width / 2 - xSpacing + this.Random(randRange)},${ii * ySpacing + 50 + this.Random(randRange)}]`;
          points += `[${this.width / 2 - xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`;
          this.DrawPoint(JSON.parse(`[${this.width / 2 - xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`), 0, i);
        }
      }
      if (i % 2 !== 0) {
        points += `[${this.width / 4},${ii * ySpacing + 100}][0,${ii * ySpacing + 150}]]`;
      } else {
        points += `[${this.width - this.width / 4},${ii * ySpacing}][${this.width},${ii * ySpacing + 150}]]`;
      }
      points = points.replaceAll('][', '],[');
      const pointsObject = JSON.parse(points);
      const pathString = this.GeneratePath(pointsObject, false);
      this.DrawBezier(pathString, '#2563EB');
    },
  },
  computed: {
    Realisation() {
      const allRealisation = this.$store.state.realisation;
      return allRealisation.slice(0, 3);
    },
    parcourtProfesionnel() {
      const allParcourt = this.$store.state.parcourtProfesionnel;
      return allParcourt;
      // return allParcourt.slice(0, 3);
    },
    parcourtEducatif() {
      const allParcourt = this.$store.state.parcourtEducatif;
      const allPorcourtSorted = allParcourt.reverse();
      return allPorcourtSorted;
      // return allParcourt.slice(0, 3);
    },
  },
  mounted() {
    this.width = window.innerWidth - 22;
    this.CalcPoints(this.pointsRepeat, 0, this.width / 6, this.ySpacing);
    document.getElementById('svg').style.width = `${this.width}px`;
    window.addEventListener('resize', () => {
      this.width = window.innerWidth - 22;
      const element = document.getElementById('svg');
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.style.width = `${this.width}px`;
      this.CalcPoints(this.pointsRepeat, 0, this.width / 6, this.ySpacing);
    });
    window.addEventListener('scroll', () => {
      const svg = document.querySelector('#svg');
      const svgData = svg.getBoundingClientRect();
      const screenHeight = window.screen.height;
      const path = document.querySelector('#svg path').getAttribute('d');
      const distanceParcouru = -((svgData.top) / svgData.height) * 100;
      const span = document.querySelector('#span');
      span.style.offsetPath = `path('${path}')`;
      span.style.offsetDistance = `calc(${distanceParcouru}% + ${screenHeight}px)`;
    });
  },
};
</script>
