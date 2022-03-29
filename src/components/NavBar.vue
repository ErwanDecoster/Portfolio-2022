<template>
  <header class="p-4 fixed inset-x-0 z-20 bg-white shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)]">
    <div class="max-w-screen-lg mx-auto">
      <nav class="flex justify-between">
        <router-link to="/" class="px-4 py-2 ">erwan.pro</router-link>
        <ul>
          <li class="flex gap-4">
            <router-link :to="{ name: 'home', hash: '#a_propos_de_moi'}" class="px-4 py-2">A propo de moi</router-link>
            <router-link :to="{ name: 'home', hash: '#realisations'}" class="px-4 py-2">Réalisations</router-link>
            <router-link :to="{ name: 'home', hash: '#parcourts'}" class="px-4 py-2">Parcours</router-link>
            <router-link to="/" class="px-4 py-2">Blocs de competences</router-link>
            <!-- <router-link to="/" class="px-4 py-2">Veille</router-link> -->
            <router-link :to="{ name: 'home', hash: '#contact_form'}" class="px-4 py-2 bg-blue-600 shadow-md text-white rounded-xl">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
