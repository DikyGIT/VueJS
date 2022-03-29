import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-berita-indonesia.vercel.app/",
});

export default () => {
  return instance;
};
