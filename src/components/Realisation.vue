<template>
  <div class="flex flex-col gap-2" :class="[ {'md:order-1': data.id % 2 != 0} ]">
    <div>
      <h3 class="text-left text-3xl">{{ data.name }}</h3>
      <p class="text-sm text-left text-neutral-500">{{ data.type }}</p>
    </div>
    <ul class="flex gap-2 flex-wrap">
      <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color + '; color: #' + ContrastedColor(tech.color) + ';'">{{ tech.name }}</li>
    </ul>
    <p class="text-left grow-[1]">{{ data.shortDesc }}</p>
    <div class="flex gap-4">
      <a v-show="data.website" :href="data.website" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit" target="_blank">Visiter le site</a>
      <router-link :to="{ name: 'realisation', params: { name: data.pathName }}" class="px-5 py-2 border-2 border-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 rounded-xl flex items-center w-fit">Plus d'informations
      </router-link>
    </div>
  </div>
  <img class="w-full shadow-md rounded-xl aspect-video border border-neutral-600" :src="require(`@/assets/realisations/${data.img}.png`)" alt="">
</template>

<script>

export default {
  props: ['data'],
  methods: {
    ContrastedColor(hexcolorParam) {
      // If a leading # is provided, remove it
      let hexcolor = hexcolorParam;
      if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolorParam.slice(1);
      }
      // Convert to RGB value
      const r = parseInt(hexcolor.substr(0, 2), 16);
      const g = parseInt(hexcolor.substr(2, 2), 16);
      const b = parseInt(hexcolor.substr(4, 2), 16);
      // Get YIQ ratio
      // const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      const yiq = ((r * 350) + (g * 587) + (b * 114)) / 1000;
      // Check contrast
      return (yiq >= 128) ? '000' : 'fff';
    },
  },
};
</script>
