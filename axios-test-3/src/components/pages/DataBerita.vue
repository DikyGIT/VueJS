<template>
  <div class="databerita">
    <div class="container-fluid">
      <div class="row">
        <div class="col box-nama-berita">
          <a
            href="/databerita"
            class="
              nama-berita
              d-flex
              justify-content-center
              align-items-center
              py-2
            "
            ><b-icon-house-door-fill class="mr-2"></b-icon-house-door-fill
            >BERITA ANTARA</a
          >
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <!-- <router-link to="/databerita">Navbar scroll</router-link> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
            style="max-height: 100px"
          >
            <li
              class="nav-item active"
              v-for="(databer, index) in mydataberita"
              v-bind:key="index"
            >
              <a
                class="nav-link font-weight-bold"
                href="#"
                @click="kategoriBerita(databer.name)"
                ><strong>{{ databer.name.toUpperCase() }}</strong></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="row">
        <div
          class="
            col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6
            d-flex
            justify-content-center
          "
          v-for="(databer, index) in mydataberita"
          v-bind:key="index"
        >
          <b-nav>
            <b-nav-item>
              <div @click="kategoriBerita(databer.name)">
                {{ databer.name }}
              </div> -->
    <!-- <router-link v-bind:to="`/databerita/antara/${databer.name}`">{{
                databer.name
              }}</router-link> -->
    <!-- </b-nav-item>
          </b-nav>
        </div>
      </div> -->

    <div class="container-fluid">
      <div class="row justify-content-center mt-4">
        <div
          class="
            col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12
            p-5
            m-4
            text-left
            box-content
          "
          v-for="kategoridata in datakategori"
          :key="kategoridata.id"
        >
          <h4 class="title-berita">
            <a :href="kategoridata.link" target="_blank">{{
              kategoridata.title
            }}</a>
          </h4>

          <p class="text-left data-pubdate">{{ kategoridata.pubDate }}</p>

          <img :src="kategoridata.thumbnail" class="img-fluid mb-3" alt="" />

          <p class="data-deskripsi" v-html="kategoridata.description"></p>
        </div>
      </div>
      <div
        class="row-header row align-items-center"
        v-if="datakategori.length == 0"
      >
        <div class="box-row-header col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12">
          <h1 class="beritaTitle">
            Berita Terkini <span>Antara</span> <br />Informasi Berita Terkini
            dan Terbaru Hari Ini
          </h1>
          <p class="header-berita-text">
            yang menyajikan sebuah data informasi serta kejadian suatu peristiwa
            secara aktual dan terpercaya, dengan data informasi yang selalu
            update setiap harinya, yang ada di negara kita tercinta indonesia
            maupun dunia.
          </p>
        </div>

        <img src="@/assets/img/hero.svg" class="hero-img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SumberBerita from "@/services/SumberBerita";
import KumpulanBerita from "@/services/KumpulanBerita";

export default {
  name: "DataBerita",

  data() {
    return {
      mydataberita: [],
      datakategori: [],
    };
  },

  created() {
    this.berita();
  },

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

    kategoriBerita: async function (kategori) {
      try {
        // const getCategory = this.$route.params.kategori;
        const response = await KumpulanBerita.antara_terbaru(kategori);
        this.datakategori = response.data.data.posts;
        console.log(this.datakategori);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/style.css");
</style>
