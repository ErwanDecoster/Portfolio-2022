<template>
  <footer class="p-16 bg-white shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)]">
    <div class="max-w-screen-lg mx-auto flex justify-evenly">
      <div class="flex flex-col w-64 gap-2">
        <p class="text-lg font-bold text-center">Mes liens</p>
        <ul class="flex flex-col items-center">
          <li>
            <a class="hover:underline underline-offset-1 py-[1px] px-8 inline-block text-center" href="https://github.com/ErwanDecoster" target="_blank">Github</a>
          </li>
          <li>
            <a class="hover:underline underline-offset-1 py-[1px] px-8 inline-block text-center" href="https://www.linkedin.com/in/erwan-decoster/" target="_blank">linkedin</a>
          </li>
          <li>
            <a class="hover:underline underline-offset-1 py-[1px] px-8 inline-block text-center" href="https://twitter.com/erwan0711" target="_blank">Twitter</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col w-64 gap-2">
        <p class="text-lg font-bold text-center">Portfolio</p>
        <ul class="flex flex-col items-center">
          <li>
            <router-link :to="{ path: 'Mensions_Legal'}" class="hover:underline underline-offset-1 py-[1px] px-8 inline-block text-center">Mensions lègales</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home', hash: '#contact_form'}" class="hover:underline underline-offset-1 py-[1px] px-8 inline-block text-center">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
