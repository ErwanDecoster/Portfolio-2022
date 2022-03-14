<template>
  <div>
    <section class="h-[90vh] py-60">
      <div class="flex gap-8 max-w-screen-lg mx-auto px-3">
        <ul class="pt-4 flex flex-col gap-4">
          <li>
            <a href="">
              <img class="h-8" src="@/assets/logo-github.svg" alt="Logo du site github">
            </a>
          </li>
          <li>
            <a href="">
              <img class="h-8" src="@/assets/logo-linkedin.svg" alt="Logo du site linkedin">
            </a>
          </li>
          <li>
            <a href="">
              <img class="h-8" src="@/assets/logo-twitter.svg" alt="Logo du site twitter">
            </a>
          </li>
        </ul>
        <div class="flex flex-col gap-6">
          <h1 class="text-7xl font-semibold text-left flex flex-col gap-4">
            <span>Decoster</span>
            <span>Erwan</span>
          </h1>
          <router-link to="/" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl items-center w-fit">Me contacter</router-link>
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
    <section class="">
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
              <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl items-center">Me contacter</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Réalisations</h2>
        <div class="flex flex-col gap-20" >
          <div v-for="row in Realisation" v-bind:key="row" class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <img class="w-full shadow-md rounded-xl aspect-video" src="" alt="" :class="{ 'order-1': row.imgAlignment === 0 }">
            <div class="flex flex-col gap-2">
              <div>
                <h3 class="text-left text-3xl">{{ row.name }}</h3>
                <p class="text-sm text-left text-neutral-500">{{ row.type }}</p>
              </div>
              <ul class="flex gap-2 flex-wrap">
                <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in row.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
              </ul>
              <p class="text-left grow-[1]">Web App de covoiturage</p>
              <div class="flex gap-4">
                <a class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center" href="">Visiter le site</a>
                <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl items-center">Plus d'informations</router-link>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl w-fit mx-auto items-center">Voir toutes les réalisations</router-link>
      </div>
    </section>
    <section class="min-h-screen py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Parcours</h2>
        <div class="flex flex-col gap-20" >
          <svg id="svg" height="800" width="800" stroke-dasharray="14" stroke-linecap="round"></svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      width: window.innerWidth - 20,
      height: 6000,
      svgelement: '',
    };
  },
  components: {
  },
  methods: {
    Random(range) {
      return -range / 2 + Math.floor(Math.random() * range);
    },
    DrawBezier(pathString, stroke) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttributeNS(null, 'd', pathString);
      path.setAttributeNS(null, 'stroke', stroke);
      path.setAttributeNS(null, 'fill', 'transparent');
      path.setAttributeNS(null, 'stroke-width', '4px');
      this.svgelement.appendChild(path);
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
    DrawPoints(points, colour) {
      points.forEach((point) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttributeNS(null, 'cx', point[0]);
        circle.setAttributeNS(null, 'cy', point[1]);
        circle.setAttributeNS(null, 'r', 6);
        circle.setAttributeNS(null, 'fill', colour);
        this.svgelement.appendChild(circle);
      });
      // for (const point of points) {
      //   const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      //   circle.setAttributeNS(null, 'cx', point[0]);
      //   circle.setAttributeNS(null, 'cy', point[1]);
      //   circle.setAttributeNS(null, 'r', 6);
      //   circle.setAttributeNS(null, 'fill', colour);
      //   this.svgelement.appendChild(circle);
      // }
    },
    CalcPoints(repeat, randRange, xSpacing, ySpacing) {
      let points = `[[0,0][${this.width / 4},50]`;
      let i = 0;
      let ii = 2;
      for (; i < repeat; i += 1, ii += 2) {
        if (i % 2 === 0) {
          points += `[${this.width / 2 + xSpacing + this.Random(randRange)},${ii * ySpacing + 50 + this.Random(randRange)}]`;
          points += `[${this.width / 2 + xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`;
        } else {
          points += `[${this.width / 2 - xSpacing + this.Random(randRange)},${ii * ySpacing + 50 + this.Random(randRange)}]`;
          points += `[${this.width / 2 - xSpacing + this.Random(randRange)},${ii * ySpacing + ySpacing + 50 + this.Random(randRange)}]`;
        }
      }
      if (i % 2 !== 0) {
        points += `[${this.width / 4},${ii * ySpacing + ySpacing + 50}][0,${ii * ySpacing + ySpacing + 100}]]`;
      } else {
        points += `[${this.width - this.width / 4},${ii * ySpacing + ySpacing}][${this.width},${ii * ySpacing + ySpacing + 100}]]`;
      }
      points = points.replaceAll('][', '],[');
      const pointsObject = JSON.parse(points);
      const pathString = this.GeneratePath(pointsObject, false);
      this.DrawBezier(pathString, '#275DE7');
      this.DrawPoints(pointsObject, '#33ff33');
      // console.log(pointsObject);
    },
  },
  computed: {
    Realisation() {
      const allRealisation = this.$store.state.realisation;
      return allRealisation.slice(0, 3);
    },
  },
  mounted() {
    this.svgelement = document.getElementById('svg');
    this.CalcPoints(3, 0, this.width / 6, 150);
  },
};
</script>
