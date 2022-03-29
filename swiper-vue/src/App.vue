<template>
  <div id="app">
    <HelloWorld />
    <SwiperVersTwo />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SwiperVersTwo from "./components/SwiperVersTwo";

export default {
  name: "App",
  components: {
    HelloWorld,
    SwiperVersTwo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
