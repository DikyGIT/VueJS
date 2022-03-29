import ApiAuthentication from "./ApiAuthentication";

export default {
  login(params) {
    return ApiAuthentication().post("admin/login", params);
  },
  registration(params) {
    return ApiAuthentication().post("admin/registration", params);
  },
};
