import axios from "axios";

const instance = axios.create({
  baseURL: "https://doa-doa-api-ahmadramadhan.fly.dev",
});

export default () => {
  return instance;
};
