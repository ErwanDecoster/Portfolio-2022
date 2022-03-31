<template>
  <div class="w-full">
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
          <a v-show="this.realisation.website" :href="`https://${this.realisation.website}`" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit" target="_blank">Visiter le site</a>
          <a v-for="row in this.realisation.githubLinks" :key="row" :href="row.link" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 rounded-xl flex items-center w-fit" target="_blank">{{ row.linkName }}</a>
        </div>
        <div class="grid gap-2">
          <p class="font-bold text-lg">Technologie utilisées :</p>
          <ul class="flex gap-2 flex-wrap">
            <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in this.realisation.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div v-if="this.realisation.projectPartenaire" class="grid gap-2">
          <p class="font-bold text-lg">Partenaire :</p>
          <ul class="flex gap-2 flex-wrap">
            <li v-for="partenaire in this.realisation.projectPartenaire" v-bind:key="partenaire">
              <a class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit" :href="partenaire.link">{{ partenaire.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
      <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-12 grid gap-8 bg-white mt-16">
        <h2 class="font-bold text-3xl">Le projet</h2>
        <div>
          <h3 class="font-bold text-xl mb-2">Origine</h3>
          <p v-html="this.realisation.projectOrigine" class=""></p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">Objectif</h3>
          <p v-html="this.realisation.projectObjectif" class=""></p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">Description</h3>
          <p v-html="this.realisation.projectDescription" class=""></p>
        </div>
        <div v-if="this.realisation.foncionalites">
          <h3 class="font-bold text-xl mb-2">Fonctionlités</h3>
          <div v-for="foncionalite in this.realisation.foncionalites" :key="foncionalite">
            <h4 class="font-bold text-lg mb-1">{{ foncionalite.for }}</h4>
            <ul class="list-disc list-inside">
              <li v-for="foncionaliteFor in foncionalite.foncionalitesFor" :key="foncionaliteFor">{{ foncionaliteFor.name }}</li>
            </ul>
          </div>
        </div>
        <div class="grid gap-2">
          <h3 class="font-bold text-xl">Maquette</h3>
          <img class="w-full h-80" src="" alt="">
          <a :href="this.realisation.maquetteLink" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit">{{ this.realisation.maquetteWebsite }}</a>
        </div>
      </div>
      <div v-if="this.realisation.mcdImg || this.realisation.mldImg || this.realisation.mldImg" class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-12 grid gap-8 bg-white">
        <h2 class="font-bold text-3xl">Les données</h2>
        <div v-if="this.realisation.mcdImg" class="grid gap-2">
          <h3 class="font-bold text-xl">MCD</h3>
          <img class="w-full h-80" :src="this.realisation.mcdImg" alt="">
          <a :href="this.realisation.mcdLink" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit">Ressources associé</a>
        </div>
        <div v-if="this.realisation.mldImg" class="grid gap-2">
          <h3 class="font-bold text-xl">MLD</h3>
          <img class="w-full h-80" :src="this.realisation.mldImg" alt="">
          <a :href="this.realisation.mldLink" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit">Ressources associé</a>
        </div>
        <div v-if="this.realisation.mpdImg" class="grid gap-2">
          <h3 class="font-bold text-xl">MPD</h3>
          <img class="w-full h-80" :src="this.realisation.mpdImg" alt="">
          <a :href="this.realisation.mpdLink" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit">Ressources associé</a>
        </div>
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
              <router-link :to="{ name: 'realisation', params: { name: mission.assosiedProjetPath }}" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-blue-600/25 transition duration-200 text-white rounded-xl flex items-center w-fit">Page concerné</router-link>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    </section>
    <Footer />
  </div>
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
      // console.log(realisations);
      realisations.forEach((realisation) => {
        if (realisation.pathName === this.$route.params.name) {
          // console.log(realisation);
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
