<template>
  <div id="app">
    <SlickVue />
  </div>
</template>

<script>
import SlickVue from "./components/SlickVue.vue";

export default {
  name: "App",
  components: {
    SlickVue,
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
  margin-top: 60px;
}
</style>
