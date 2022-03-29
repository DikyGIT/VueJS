import ApiBerita from "@/services/ApiBerita";

export default {
  antara_terbaru(kategori) {
    return ApiBerita().get(`https://api-berita-indonesia.vercel.app/antara/${kategori}`);
  },
};
