<template>
  <div>
    <h1 class="my-4 mb-5">Halaman Fetch Data Api Doa</h1>
    <div class="container">
      <div class="row my-5">
        <div class="col-4 mx-auto">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm col-md-6 col-lg-6 mb-4 box-data" v-for="data in dataApi" :key="data.id">
          <div class="card border-success mb-3 mx-auto" style="max-width: 30rem">
            <div class="card-header">{{ data.doa }}</div>
            <div class="card-body text-success">
              <h5 class="card-title">{{ data.ayat }}</h5>
              <p class="card-text">{{ data.latin }}</p>
              <p class="card-text">{{ data.artinya }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "@/services/DataApi";

export default {
  name: "FetchDataApiDoa",

  data() {
    return {
      dataApi: [],
      dataDoa: [],
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData: async function () {
      try {
        const response = await DataService.getData();
        this.dataApi = response.data;
        console.log(response);
      } catch (error) {
        console.log();
      }
    },
  },
};
</script>

<style scope></style>
