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
          <router-link to="/" class="px-4 py-2 bg-blue-600 shadow-md text-white rounded-xl">Me contacter</router-link>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-16">
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
              <router-link to="/" class="px-4 py-2 bg-blue-600 shadow-md text-white rounded-xl">Telecharger CV</router-link>
              <router-link to="/" class="px-4 py-2 border-2 border-blue-600 shadow-md rounded-xl">Me contacter</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-16">
      <div class="max-w-screen-lg mx-auto px-3">
        <h2 class="text-3xl font-bold">Réalisations</h2>
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
};
</script>
