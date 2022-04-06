<template>
  <NavBar />
  <!-- <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <div id="ModalSection"></div>
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

.slide-right-enter-from {
  position: absolute;
  transform: translateX(-100%);
}
.slide-right-enter-to {
  position: absolute;
  transform: translateX(0%);
}

.slide-right-leave-from {
  position: absolute;
  transform: translateX(0%);
}
.slide-right-leave-to {
  position: absolute;
  transform: translateX(100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .5s ease;
}

.slide-left-enter-from {
  position: absolute;
  transform: translateX(100%);
}
.slide-left-enter-to {
  position: absolute;
  transform: translateX(0);
}

.slide-left-leave-from{
  position: absolute;
  transform: translateX(0%);
}
.slide-left-leave-to {
  position: absolute;
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
