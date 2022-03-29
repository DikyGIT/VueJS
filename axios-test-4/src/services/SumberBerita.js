import ApiBerita from "./ApiBerita";

export default {
  semuaberita(params) {
    return ApiBerita().get("https://api-berita-indonesia.vercel.app/", params);
  },
};
