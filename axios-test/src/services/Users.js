import Api from "@/services/Api";

export default {
  getUsers(params) {
    return Api().get("admin/getUsers", params);
  },
  updateUsers(id, params) {
    return Api().put(`admin/update/users/${id}`, params);
  },
  deleteUsers(id) {
    return Api().delete(`admin/delete/users/${id}`);
  },
};
