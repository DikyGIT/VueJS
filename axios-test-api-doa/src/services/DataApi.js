import Api from "@/services/Api";

export default {
  getData(params) {
    return Api().get("https://doa-doa-api-ahmadramadhan.fly.dev/api", params);
  },
};
