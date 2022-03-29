import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-alquranid.herokuapp.com",
});

export default () => {
  return instance;
};
