import Api from "@/services/Api";

export default {
  getUsers(params) {
    return Api().get("admin/getUsers", params);
  },
};
