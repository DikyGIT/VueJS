<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center" v-for="(databer, index) in mydataberita" v-bind:key="index">
          <b-nav>
            <b-nav-item
              ><router-link v-bind:to="`/databerita/antara/${databer.name}`">{{ databer.name }}</router-link></b-nav-item
            >
          </b-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SumberBerita from "@/services/SumberBerita";
// import KumpulanBerita from "@/services/KumpulanBerita";

export default {
  name: "DataBerita",

  data() {
    return {
      mydataberita: [],
      // datakategori: [],
      // mykategoriname: [],

      // slugKategori: "",
    };
  },

  created() {
    this.berita();
    // this.kategoriBerita();
    // this.getKategori();
  },

  // mounted() {
  //   this.getSlugName();
  // },

  methods: {
    berita: async function () {
      try {
        const response = await SumberBerita.semuaberita();
        this.mydataberita = response.data.endpoints[0].paths;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    // kategoriBerita: async function () {
    //   try {
    //     const getCategory = this.$route.params.kategori;
    //     const response = await KumpulanBerita.antara_terbaru(getCategory);
    //     this.datakategori = response.data.data.posts;
    //     console.log(this.datakategori);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

<style scoped>
@import url("../../assets/css/style.css");
</style>
