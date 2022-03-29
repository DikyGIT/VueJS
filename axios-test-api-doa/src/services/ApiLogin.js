import axios from "axios";

const instance1 = axios.create({
  baseURL: "http://localhost:5050/",
});

export default () => {
  return instance1;
};
