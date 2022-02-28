<template>
  <div>
    <section class="min-h-screen py-32">
      <div class="flex gap-8 max-w-screen-lg mx-auto px-3">
        <ul class="flex flex-col gap-2">
          <li><a href="">GitHub</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Linkdin</a></li>
        </ul>
        <div class="flex flex-col gap-8">
          <h1 class="text-5xl font-bold text-left">Decoster <br> Erwan</h1>
          <router-link to="/" class="px-5 py-2 bg-blue-600 shadow-md text-white rounded-xl items-center">Me contacter</router-link>
        </div>
      </div>
    </section>
    <section class="">
      <div class="max-w-screen-lg mx-auto px-3">
        <h2 class="text-3xl font-bold">A propos de moi</h2>
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
              <router-link to="/" class="px-5 py-2 bg-blue-600 shadow-md text-white rounded-xl items-center">Telecharger CV</router-link>
              <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md rounded-xl items-center">Me contacter</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold">Réalisations</h2>
        <div class="flex flex-col gap-16" >
          <div v-for="row in Realisation" v-bind:key="row" class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <img class="w-full shadow-md rounded-xl aspect-video" src="" alt="">
            <div class="flex flex-col gap-2">
              <div>
                <h3 class="text-left text-3xl">{{ row.name }}</h3>
                <p class="text-sm text-left">{{ row.type }}</p>
              </div>
              <ul class="flex gap-2 flex-wrap">
                <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in row.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
              </ul>
              <p class="text-left grow-[1]">Web App de covoiturage</p>
              <div class="flex gap-4">
                <a class="px-5 py-2 bg-blue-600 shadow-md text-white rounded-xl flex items-center" href="">Visiter le site</a>
                <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md rounded-xl items-center">Plus d'informations</router-link>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/" class="px-5 py-2 border-2 border-blue-600 shadow-md rounded-xl w-fit mx-auto items-center">Voir toutes les realisations</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed: {
    Realisation() {
      return this.$store.state.realisation;
    },
  },
};
</script>
