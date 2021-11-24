<template>
  <div id="app">
    <div class="container">
      <div class="row header mb-5 p-3">
        <div class="col-lg-12">
          <h2>What I do Today?</h2>
        </div>
      </div>
      <div class="row content">
        <div class="col-lg-12">
          <div class="pekerjaan-rumah">
            <div
              v-for="tugasSaya in tugas"
              v-bind:key="tugasSaya.id"
              class="tugas"
            >
              <ItemTugas v-bind:tugasSaya="tugasSaya" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

import ItemTugas from "./components/ItemTugas.vue";

export default {
  name: "App",
  data: function () {
    return {
      tugas: [
        {
          id: 1,
          namaTugas: "Membersihkan Toilet",
          isDone: false,
        },
        {
          id: 2,
          namaTugas: "Makan KFC",
          isDone: false,
        },
        {
          id: 3,
          namaTugas: "Nge-GYM",
          isDone: false,
        },
        {
          id: 4,
          namaTugas: "Istirahat Secukupnya",
          isDone: false,
        },
      ],
    };
  },
  components: {
    ItemTugas,
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

.header {
  background-color: #1abc9c;
}

.header h2 {
  margin: 0;
}

.content .pekerjaan-rumah .tugas .form-check {
  width: 100%;
  margin: auto;
  text-align: left;
}

.content .pekerjaan-rumah .tugas .form-check .item {
  font-size: 20px;
}

.item-selected {
  background-color: #1abc9c;
}
</style>
