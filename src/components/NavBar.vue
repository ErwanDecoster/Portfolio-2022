<template>
  <header class="p-4 fixed inset-x-0 z-20 md:bg-white md:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)]">
    <div class="max-w-screen-lg mx-auto hidden sm:block">
      <nav class="flex justify-between">
        <router-link to="/" class="group flex gap-2 items-center">
          <svg class="w-10" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="duration-150 group-hover:fill-blue-600" width="106" height="106" rx="20.3846" fill="#121212"/>
            <path d="M40.7949 79C38.5933 79 37.4926 77.8992 37.4926 75.6977V30.5662C37.4926 28.3646 38.5933 27.2638 40.7949 27.2638H68.0939C69.8063 27.2638 70.6624 28.0955 70.6624 29.7589C70.6624 31.4712 69.8063 32.3274 68.0939 32.3274H43.3633V50.2332H66.5529C68.2652 50.2332 69.1213 51.0649 69.1213 52.7283C69.1213 54.4406 68.2652 55.2968 66.5529 55.2968H43.3633V73.9365H68.0939C69.8063 73.9365 70.6624 74.7682 70.6624 76.4315C70.6624 78.1438 69.8063 79 68.0939 79H40.7949Z" fill="white"/>
          </svg>
          <p class="hidden md:inline whitespace-nowrap">erwan-decoster.com</p>
        </router-link>
        <ul>
          <li class="flex gap-4">
            <router-link :to="{ name: 'home', hash: '#a_propos_de_moi'}" class="px-4 py-2 hover:underline">A propos de moi</router-link>
            <router-link :to="{ name: 'home', hash: '#realisations'}" class="px-4 py-2 hover:underline">Réalisations</router-link>
            <router-link :to="{ name: 'home', hash: '#parcourts'}" class="px-4 py-2 hover:underline">Parcours</router-link>
            <router-link :to="{ name: 'home', hash: '#contact_form'}" class="px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <button @click="openFullNav = !openFullNav" class="sm:hidden group h-8 w-8 absolute right-6 top-6 flex flex-col gap-2">
      <span class="w-full bg-black h-1 block rounded-full"></span>
      <span class="group-hover:w-1/3 w-full duration-150 bg-black h-1 block rounded-full"></span>
      <span class="w-full bg-black h-1 block rounded-full"></span>
    </button>
    <Teleport to="body">
      <div class="md:hidden fixed z-30 inset-0 bg-white" v-if="openFullNav">
        <button @click="openFullNav = !openFullNav" class="h-8 w-8 absolute right-6 top-6 flex flex-col gap-2 duration-150 hover:rotate-45">
          <span class="w-full bg-black h-1 block rounded-full rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          <span class="w-full bg-black h-1 block rounded-full -rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </button>
          <router-link to="/" class="group flex gap-2 items-center absolute left-6 top-6">
            <svg class="w-10" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="duration-150 group-hover:fill-blue-600" width="106" height="106" rx="20.3846" fill="#121212"/>
              <path d="M40.7949 79C38.5933 79 37.4926 77.8992 37.4926 75.6977V30.5662C37.4926 28.3646 38.5933 27.2638 40.7949 27.2638H68.0939C69.8063 27.2638 70.6624 28.0955 70.6624 29.7589C70.6624 31.4712 69.8063 32.3274 68.0939 32.3274H43.3633V50.2332H66.5529C68.2652 50.2332 69.1213 51.0649 69.1213 52.7283C69.1213 54.4406 68.2652 55.2968 66.5529 55.2968H43.3633V73.9365H68.0939C69.8063 73.9365 70.6624 74.7682 70.6624 76.4315C70.6624 78.1438 69.8063 79 68.0939 79H40.7949Z" fill="white"/>
            </svg>
            <p class="whitespace-nowrap">erwan-decoster.com</p>
          </router-link>
        <ul class="flex flex-col gap-4 justify-center mx-auto items-center h-full">
          <li>
            <router-link @click="openFullNav = !openFullNav" to="/" class="px-4 py-2 hover:underline text-2xl">Accueil</router-link>
          </li>
          <li>
            <router-link @click="openFullNav = !openFullNav" :to="{ name: 'home', hash: '#a_propos_de_moi'}" class="px-4 py-2 hover:underline text-2xl">A propos de moi</router-link>
          </li>
          <li>
            <router-link @click="openFullNav = !openFullNav" :to="{ name: 'home', hash: '#realisations'}" class="px-4 py-2 hover:underline text-2xl">Réalisations</router-link>
          </li>
          <li>
            <router-link @click="openFullNav = !openFullNav" :to="{ name: 'home', hash: '#parcourts'}" class="px-4 py-2 hover:underline text-2xl">Parcours</router-link>
          </li>
          <li>
            <router-link @click="openFullNav = !openFullNav" :to="{ name: 'home', hash: '#contact_form'}" class="px-4 py-2 hover:underline text-2xl">Contact</router-link>
          </li>
        </ul>
      </div>
    </Teleport>
  </header>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      openFullNav: false,
    };
  },
};
</script>
