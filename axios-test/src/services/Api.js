// * Import axios
// * karna kita akan membuat sebuah athenticatoin maka routernya harus di import

import axios from "axios";
// import router from "@/router";

// const UNAUTHORIZED = 401;
// const INVALID_TOKEN = "Invalid token";

// * inisiasi baseURLnya menggunakan axios.create({...})

const instance = axios.create({
  baseURL: "http://localhost:5050/",
});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { status } = error.response;
//     const responseMessage = error.response.data.message;

//     if (status === UNAUTHORIZED && responseMessage === INVALID_TOKEN) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
//       router.push("/login");
//     }
//     return Promise.reject(error);
//   }
// );

export default () => {
  return instance;
};
