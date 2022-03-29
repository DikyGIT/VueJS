import axios from "axios";

const instance = axios.create({
  baseURL: "http://gallery-3dmodel.pptik.id:7001/",
});

export default () => {
  return instance;
};
