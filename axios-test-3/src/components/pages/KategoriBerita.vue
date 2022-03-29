<template>
  <div>
    <div>Kategori Beritas</div>
    {{ mydataberita }}
  </div>
</template>

<script>
import KumpulanBerita from "@/services/KumpulanBerita";
export default {
  name: "KategoriBerita",
  data() {
    return {
      mydataberita: [],
    };
  },
  created() {
    this.kategoriBerita();
    // this.getKategori();
  },
  methods: {
    kategoriBerita: async function () {
      try {
        const getCategory = this.$route.params.kategori;
        const response = await KumpulanBerita.antara_terbaru(getCategory);
        this.mydataberita = response.data.data.posts;
        console.log(this.mydataberita);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
