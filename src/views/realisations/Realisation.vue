<template>
  <section class="h-[40vh] py-60">
      <div class="flex gap-8 max-w-screen-lg mx-auto px-3">
        <div class="flex flex-col gap-6">
          <h1 class="text-7xl font-semibold text-left flex flex-col gap-4">
            {{ this.realisation.name }}
            <!-- {{ this.realisation['name'] }} -->
          </h1>
            <!-- {{ $route.params.name }} -->
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
    <section class="py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <div class="flex gap-4">
          <a v-show="this.realisation.website" :href="`https://${this.realisation.website}`" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Visité le site</a>
          <a v-show="this.realisation.github" :href="this.realisation.github" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 rounded-xl items-center w-fit">Github</a>
        </div>
        <div class="grid gap-2">
          <p class="font-bold text-lg">Technologie utilisées :</p>
          <ul class="flex gap-2 flex-wrap">
            <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in this.realisation.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div v-show="this.realisation.objectif" class="flex flex-col gap-2">
            <p class="font-bold text-lg">Objectif :</p>
            <p>{{ this.realisation.objectif }}</p>
          </div>
          <img class="w-full aspect-video bg-blue-600" :src="this.realisation.img" alt="">
        </div>
        <!-- <h2 class="text-3xl font-bold text-center mx-auto">Réalisations</h2> -->
        <!-- {{ this.realisation }} -->
      </div>
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
      <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-12 grid gap-8 bg-white">
        <h2 class="font-bold text-3xl">Le projet</h2>
        <div>
          <h3 class="font-bold text-xl mb-2">projectOrigine</h3>
          <p v-html="this.realisation.projectOrigine" class=""></p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">projectObjectif</h3>
          <p v-html="this.realisation.projectObjectif" class=""></p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">projectDescription</h3>
          <p v-html="this.realisation.projectDescription" class=""></p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">Fonctionlités</h3>
          <div v-for="foncionalite in this.realisation.foncionalites" :key="foncionalite">
            <h4 class="font-bold text-lg mb-1">{{ foncionalite.for }}</h4>
            <ul class="list-disc list-inside">
              <li v-for="foncionaliteFor in foncionalite.foncionalitesFor" :key="foncionaliteFor">{{ foncionaliteFor.name }}</li>
            </ul>
          </div>
        </div>
        <!-- <div>
          <h3 class="font-bold text-lg mb-2">Localisation</h3>
          <p class="">{{ this.parcourt.companyLocation }}</p>
          <div class="grid grid-cols-2 gap-12">
            <img class="bg-indigo-600 aspect-video rounded-lg" src="" alt="">
            <iframe class="w-full aspect-video rounded-lg" :src="this.parcourt.localisationMapsLink" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> -->
      </div>
      <!-- <div v-if="this.parcourt.missions" class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-12 grid gap-8 bg-white">
        <h2 class="font-bold text-3xl">Le stage</h2>
        <div>
          <h3 class="font-bold text-xl mb-2">Les missions</h3>
          <div v-for="mission in this.parcourt.missions" :key="mission">
            <h4 class="font-bold text-lg mb-1">{{ mission.name }}</h4>
            <p>{{ mission.desc }}</p>
            <div class="flex gap-4 items-center">
              <p class="font-bold">En voir plus :</p>
              <router-link :to="{ name: 'realisation', params: { name: mission.assosiedProjetPath }}" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Page concerné</router-link>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    </section>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Realisation',
  components: {
    Footer,
  },
  data() {
    return {
      // realisation: this.Realisation(),
      realisation: '',
    };
  },
  methods: {
    Realisation() {
      const realisations = this.$store.state.realisation;
      console.log(realisations);
      realisations.forEach((realisation) => {
        if (realisation.pathName === this.$route.params.name) {
          console.log(realisation);
          this.realisation = realisation;
        }
      });
    },
  },
  mounted() {
    this.Realisation();
  },
};
</script>
