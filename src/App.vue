<template>
  <NavBar />
  <!-- <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and fallback to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <!-- <router-view/> -->
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  font-family: 'Nunito', sans-serif;
  background: #fff;
  overflow-x: hidden;
}
html {
  scroll-behavior: smooth;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .5s ease;
}

/* ca marche */
  /* je quitte realisation ----- */
.slide-right-enter-from {
  position: absolute;
  /* background: blueviolet; */
  transform: translateX(-100%);
}
.slide-right-enter-to {
  position: absolute;
  /* background: powderblue; */
  transform: translateX(0%);
}
/* ca marche */

.slide-right-leave-from {
  position: absolute;
  /* background: yellow; */
  transform: translateX(0%);
}
.slide-right-leave-to {
  position: absolute;
  /* background: crimson; */
  transform: translateX(100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .5s ease;
}

/* J'ouvre le site */
/* je quitte realisations */
.slide-left-enter-from {
  position: absolute;
  transform: translateX(100%);
  /* background: green; */
}
.slide-left-enter-to {
  position: absolute;
  transform: translateX(0);
  /* background: blue; */
}

/* ca marche */
/* Je vais sur realisations */
/* Je vais sur realisation ------ */
.slide-left-leave-from{
  position: absolute;
  /* background: red; */
  transform: translateX(0%);
}
.slide-left-leave-to {
  position: absolute;
  /* background: #000; */
  transform: translateX(-100%);
}
/* ca marche */
</style>
