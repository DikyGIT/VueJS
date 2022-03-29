const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  NamaPenyewa: { type: String },
  Latitude: { type: Number },
  Longitude: { type: Number },
  Regional: { type: String },
  Alamat: { type: String },
  Tinggi: { type: String },
  Provinsi: { type: String },
  Kecamatan: { type: String },
  Desa: { type: String },
});
module.exports = mongoose.model("Bts_plan", UserSchema);
