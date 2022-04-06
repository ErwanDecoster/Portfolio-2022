<template>
  <div class="backdrop fixed inset-0 z-30 p-4 flex flex-col content-center justify-center bg-black/20" @click.self="closeModal">
    <!-- <img class="w-full object-cover" v-if="this.realisation.mpdImg" :src="require(`@/assets/realisations/${this.realisation.mpdImg}.png`)" alt=""> -->
    <div class="mx-auto bg-white p-12 relative shadow-lg rounded-2xl h-[90vh]">
      <div class="w-full h-full">
        <img class="object-contain w-full h-full rounded-lg" v-if="imgLink" :src="require(`@/assets/realisations/${imgLink}.png`)" alt="">
      </div>
      <button @click="closeModal" class="close_button absolute h-14 w-14 top-0 right-0 duration-200 hover:rotate-45">
        <span class="h-1 w-3/4 block rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-lg"></span>
        <span class="h-1 w-3/4 block -rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-lg"></span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FullScreenImg',
  props: ['imgLink'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
