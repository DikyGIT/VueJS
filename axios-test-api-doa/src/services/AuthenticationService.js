import ApiLogin from "@/services/ApiLogin";

export default {
  login(params) {
    return ApiLogin().post("admin/login", params);
  },
  registration(params) {
    return ApiLogin().post("admin/registration", params);
  },
};
