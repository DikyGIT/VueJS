/*
Asep Trisna Setiawan
Bandung Indonesia
Oktober 2021
*/
const ModelBts = require("../Model/Model_Bts");
const response = require("../Config/response");

exports.getBts = (data) =>
  new Promise((resolve, reject) => {
    ModelBts.find().then((data) => {
      if (data.length == 0) {
        reject(response.errorResult());
      } else {
        resolve(
          Object.assign(response.suksesResponse("Succes"), {
            data: data,
          })
        );
      }
    });
  });

exports.add = (data) =>
  new Promise((resolve, reject) => {
    ModelBts.create(data)
      .then(() =>
        resolve(response.suksesResponse("Berhasil Menambah Data Bts"))
      )
      .catch(() => reject(response.errorResponse("Gagal Menambah Data Bts")));
  });

exports.delete = async (req, res) => {
  try {
    await ModelBts.findOneAndDelete({ _id: req.params.id });
    res.json(response.suksesResponse("Berhasil Menghapus Data Bts"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Menghapus Data Bts"));
  }
};
exports.update = async (req, res) => {
  try {
    await ModelBts.findOneAndUpdate(
      { _id: req.params.id },
      {
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Pemilik: req.body.Pemilik,
        Pengguna: req.body.Pengguna,
        Tinggi: req.body.Tinggi,
        Alamat: req.body.Alamat,
        FID_BATAS_: req.body.FID_BATAS_,
        OBJECTID: req.body.OBJECTID,
        Provinsi: req.body.Provinsi,
        Kecamatan: req.body.Kecamatan,
        Desa: req.body.Desa,
      }
    );
    res.json(response.suksesResponse("Berhasil Update Data Bts"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Update Data Bts"));
  }
};
