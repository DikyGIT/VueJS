import ApiQuran from "@/services/ApiQuran";

export default {
  dataSurah(params) {
    return ApiQuran().get("https://api-alquranid.herokuapp.com/surah", params);
  },
};
