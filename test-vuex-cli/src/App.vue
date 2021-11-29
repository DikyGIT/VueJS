<template>
  <div id="app">
    <h1>{{ $store.state.title }}</h1>
    <h2>{{ $store.state.count }}</h2>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import "./store/index";

export default {
  // name: "App",
  components: {
    // HelloWorld,
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
