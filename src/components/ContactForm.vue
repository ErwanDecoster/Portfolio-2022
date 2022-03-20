<template>
  <section class="py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Contact</h2>
        <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-12 grid md:flex gap-8 bg-white">
          <div class="w-max">
            <div class="flex gap-4">
              <img class="w-10 h-10" src="@/assets/icon-email.svg" alt="">
              <div>
                <p class="text-lg font-bold">Tel :</p>
                <a class="text-blue-600" href="tel:+33625306813">06 25 30 68 13</a>
              </div>
            </div>
            <div class="flex gap-4">
              <img class="w-10 h-10" src="@/assets/icon-telephone.svg" alt="">
              <div>
                <p class="text-lg font-bold">Email :</p>
                <a class="text-blue-600 " href="mailto:erwan.decoster.pro@gmail.com">erwan.decoster.pro@gmail.com</a>
              </div>
            </div>
          </div>
          <form action="" class="grid md:grid-cols-2 gap-4 grow">
            <div class="grid gap-2">
              <label for="name">Nom :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-blue-600" type="text" id="name" name="name" autocomplete="name">
            </div>
            <div class="grid gap-2">
              <label for="email">Email :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-blue-600" type="text" id="email" name="email" autocomplete="email">
            </div>
            <div class="grid gap-2">
              <label class="relative" for="tel">Tel : <span class="text-xs absolute pl-1 -top-1">optionnel</span></label>
              <input class="px-2 py-1 border-2 rounded-lg border-blue-600" type="text" id="tel" name="tel" autocomplete="tel">
            </div>
            <div class="grid gap-2">
              <label for="objet">Objet :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-blue-600" type="text" id="objet" name="objet" autocomplete="off">
            </div>
            <div class="grid md:col-span-2 ">
              <label for="message">Message :</label>
              <textarea class="px-2 py-1 border-2 rounded-lg border-blue-600 h-32" name="message" id="message"></textarea>
            </div>
            <button class="md:col-span-2 ml-auto px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 text-white rounded-xl flex items-center w-fit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
</template>
