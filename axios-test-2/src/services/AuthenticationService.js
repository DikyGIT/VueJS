import Api from "@/services/Api.js";

export default {
  login(params) {
    return Api().post("admin/login", params);
  },
  registration(params) {
    return Api().post("admin/registration", params);
  },
};
