<template>
  <div>
    <h1>Halaman FetchDataQuran</h1>
    <div class="container">
      <div class="row">
        <div class="col-12" v-for="(data, index) in dataQuran" v-bind:key="index">
          <div class="card text-white bg-dark mb-3">
            <div class="card-header">
              <h4>{{ data.nama }} Surah ke {{ data.nomor }}</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                {{ data.asma }} <br />
                {{ data.arti }}
              </h5>
              <h6>
                Ayat : {{ data.ayat }} <br />
                diturunkan di {{ data.type }}
              </h6>
              <p class="card-text" v-html="data.keterangan"></p>
              <div><a v-bind:href="data.audio" target="_blank">Play</a> <br /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataApiQuran from "@/services/DataQuran";

export default {
  name: "FetchDataQuran",

  data() {
    return {
      dataQuran: [],
    };
  },

  created() {
    this.dataSurah();
  },

  methods: {
    dataSurah: async function () {
      try {
        const response = await DataApiQuran.dataSurah();
        console.log(response);
        this.dataQuran = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
