<template>
  <div>
    <section class="h-[90vh] py-60">
      <div class="flex gap-8 max-w-screen-lg mx-auto px-3">
        <ul class="pt-4 flex flex-col gap-4">
          <li>
            <a href="https://github.com/ErwanDecoster">
              <img class="h-8" src="@/assets/logo-github.svg" alt="Logo du site github">
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erwan-decoster/">
              <img class="h-8" src="@/assets/logo-linkedin.svg" alt="Logo du site linkedin">
            </a>
          </li>
          <li>
            <a href="https://twitter.com/erwan0711">
              <img class="h-8" src="@/assets/logo-twitter.svg" alt="Logo du site twitter">
            </a>
          </li>
        </ul>
        <div class="flex flex-col gap-6">
          <h1 class="text-7xl font-semibold text-left flex flex-col gap-4">
            <span>Decoster</span>
            <span>Erwan</span>
          </h1>
          <router-link :to="{ name: 'home', hash: '#contact_form'}" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Me contacter</router-link>
        </div>
        <svg width="202" height="201" viewBox="0 0 202 201" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="241" height="245" viewBox="0 0 241 245" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div class="grid md:grid-cols-2">
          <img src="" alt="">
          <div class="grid gap-12 py-16">
            <p class="text-xl text-left text-gray-500 ">Grand pationné d’informatique depuis tout petit, aujourdhuit en BTS SIO option Slam (Solutions logicielles et applications métiers)</p>
            <ul class="flex justify-around">
              <li class="grid gap-2">
                <p class="font-bold text-3xl">10+</p>
                <p class="text-gray-400 w-24">projets completé</p>
              </li>
              <li class="grid gap-2">
                <p class="font-bold text-3xl">6+</p>
                <p class="text-gray-400 w-24">stages entreprise</p>
              </li>
              <li class="grid gap-2">
                <p class="font-bold text-3xl">2+</p>
                <p class="text-gray-400 w-24">clients satisfait</p>
              </li>
            </ul>
            <div class="flex gap-4">
              <router-link to="/" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex gap-2 items-center">
                Telecharger CV
                <img class="h-6" src="@/assets/download-outline.svg" alt="">
              </router-link>
              <router-link :to="{ name: 'home', hash: '#contact_form'}" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl items-center">Me contacter</router-link>
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
        <router-link to="/realisations" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl w-fit mx-auto items-center">Voir toutes les réalisations</router-link>
      </div>
    </section>
    <section class="min-h-screen py-16" id="parcourts">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Parcours</h2>
        <div class="flex flex-col gap-20" :style="{ 'padding-top': (50 + ySpacing / 2 - 30) + 'px' }">
          <span id="span" class="absolute rounded-full z-10 bg-blue-600 shadow-md shadow-blue-600/50 w-10 h-10 left-0" :style="{ 'margin-top': -(200 + ySpacing / 2 - 30) + 'px' }"></span>
          <svg ref="svg" id="svg" height="3000" :style="{ 'margin-top': -(200 + ySpacing / 2 - 30) + 'px' }" stroke-dasharray="14" stroke-linecap="round" class="absolute left-0 pointer-events-none"></svg>
          <div class="flex flex-col gap-2" :style="{ gap: ySpacing - 50 + 'px' }">
            <div v-for="row in Parcourt" :key="row" class="bg-white border-2 z-10 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl max-w-lg p-3 flex flex-col justify-between" :style="{ height: ySpacing + 50 + 'px' }" :class="[{ 'sm:ml-auto': (row.id % 2 !== 0) },{ 'sm:mr-auto': (row.id % 2 === 0)}]">
              <div class="flex flex-col">
                <h3 class="font-bold text-xl">{{ row.companyName }} - <span class="font-light">{{ row.role }}</span></h3>
                <p class="text-sm">{{ row.placementCity }}</p>
                <p class="text-ellipsis overflow-hidden h-[72px]">{{ row.shortDesc }}</p>
              </div>
              <!-- {{ row }} -->
              <!-- <router-link to="/" class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Plus d'information</router-link> -->
              <router-link :to="{ name: 'parcourt', params: { name: row.path }}" class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Plus d'information</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16" id="test">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Blocs de conpetences</h2>
        <div class="flex flex-wrap justify-between gap-12 md:grid md:grid-cols-2">
          <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] p-12 rounded-xl bg-white grid gap-2">
            <h3 class="font-bold text-xl">Bloc 1</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda voluptatibus. Repellat velit dolorem facilis. Quo suscipit qui nemo voluptatibus rerum. Vero necessitatibus, fuga ducimus repellat cumque eos sit error.</p>
            <button class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Voir d'information</button>
          </div>
          <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] p-12 rounded-xl bg-white grid gap-2">
            <h3 class="font-bold text-xl">Bloc 2</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda voluptatibus. Repellat velit dolorem facilis. Quo suscipit qui nemo voluptatibus rerum. Vero necessitatibus, fuga ducimus repellat cumque eos sit error.</p>
            <button class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Voir d'information</button>
          </div>
          <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] p-12 rounded-xl bg-white grid gap-2 md:col-span-2">
            <h3 class="font-bold text-xl">Bloc 3</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda voluptatibus. Repellat velit dolorem facilis. Quo suscipit qui nemo voluptatibus rerum. Vero necessitatibus, fuga ducimus repellat cumque eos sit error.</p>
            <button class="ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Voir d'information</button>
          </div>
        </div>
      </div>
    </section>
    <div id="contact_form">
      <ContactForm />
    </div>
    <button @click="RemoveHash">removehash</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
import Realisation from '@/components/Realisation.vue';

export default {
  name: 'Home',
  data() {
    return {
      width: '',
      height: 6000,
      svgelement: '',
      pointsRepeat: this.$store.state.parcourt.length,
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
    //     console.log(point);
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
      document.getElementById('svg').appendChild(circle);
      if (Xposition === 1) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttributeNS(null, 'x', point[0] + 20);
        text.setAttributeNS(null, 'y', point[1] + 5);
        text.classList = 'text-lg text-black font-bold';
        text.textContent = this.formatDates(this.Parcourt[Yposition].startDate, this.Parcourt[Yposition].endDate);
        document.getElementById('svg').appendChild(text);
      } else {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttributeNS(null, 'y', point[1] + 5);
        text.classList = 'text-lg text-black font-bold';
        text.textContent = this.formatDates(this.Parcourt[Yposition].startDate, this.Parcourt[Yposition].endDate);
        document.getElementById('svg').appendChild(text);
        text.setAttributeNS(null, 'x', point[0] - 20 - text.getBBox().width);
      }
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
    Parcourt() {
      const allParcourt = this.$store.state.parcourt;
      return allParcourt;
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
      // this.RemoveHash();
      const svg = document.querySelector('#svg');
      const svgData = svg.getBoundingClientRect();
      const screenHeight = window.screen.height;
      const path = document.querySelector('#svg path').getAttribute('d');
      // if (svgData.top < 0) {
      // const distanceParcouru = ((svgData.top + screenHeight) / 2 / svgData.height) * 100;
      const distanceParcouru = -((svgData.top) / svgData.height) * 100;
      console.log(`${distanceParcouru} %`);
      const span = document.querySelector('#span');
      span.style.offsetPath = `path('${path}')`;
      span.style.offsetDistance = `calc(${distanceParcouru}% + ${screenHeight / 2}px)`;
      // }
      // console.log(window.pageYOffset);
    });
  },
};
</script>
