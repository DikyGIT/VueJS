<template>
  <div id="app">
    <div class="container">
      <br />
      <h1 class="text-center">Aplikasi Vue Js dengan Axios</h1>
      <p class="text-center">
        Belajar menggunakan axios untuk melakukan http request
      </p>

      <div id="app">
        <!-- row digunakan untuk membuat baris dan col-4 digunakan untuk membuat lebar card sebesar 4 column -->
        <div class="row">
          <div class="col-4" v-for="i in info" :key="i.id">
            <!-- untuk membuat card bootstrap, perlu card, lalu card-body, lalu card-title, dan card-text  -->
            <div class="card" style="margin-top: 20px">
              <div class="card-body">
                <h5 class="card-title">
                  {{ i.title }}
                </h5>
                <p class="card-text">
                  {{ i.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "axios/dist/axios.min.js";

export default {
  // name: "App",

  components: {
    // HelloWorld
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
  /* margin-top: 60px; */
}
</style>
