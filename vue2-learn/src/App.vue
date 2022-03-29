<template>
  <div id="app">
    <Header @changeTitle="ubahText" v-bind:text="text" />
    <hr />
    <CAL />
    <hr />
    <LH />
    <hr />
    <CP />
  </div>
</template>

<script>
import CAL from "@/components/ConditionalAndLooping";
import LH from "@/components/LifecycleHook";
import CP from "@/components/ComputedProperties";
import Header from "@/components/HeaderWithCustomEvents ";

export default {
  name: "App",

  components: {
    CAL,
    LH,
    CP,
    Header,
  },

  data() {
    return {
      text: "ini adalah sebuah text yang berasal dari app.vue",
    };
  },

  methods: {
    ubahText(newText) {
      this.text = newText;
    },
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
