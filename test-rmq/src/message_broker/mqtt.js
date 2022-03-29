import mqtt from "mqtt";

const rmq = mqtt.connect("ws://192.168.0.2:15675/ws", {
  username: "guest",
  password: "",
});

export default rmq;
