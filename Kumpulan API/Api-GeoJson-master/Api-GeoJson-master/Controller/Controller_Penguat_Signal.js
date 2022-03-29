/*
 */
const Model = require("../Model/Model_Penguat_Signal");
const response = require("../Config/response");

exports.get = (data) =>
  new Promise((resolve, reject) => {
    Model.find().then((data) => {
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
    Model.create(data)
      .then(() =>
        resolve(response.suksesResponse("Berhasil Menambah Data "))
      )
      .catch(() => reject(response.errorResponse("Gagal Menambah Data ")));
  });

exports.delete = async (req, res) => {
  try {
    await Model.findOneAndDelete({ _id: req.params.id });
    res.json(response.suksesResponse("Berhasil Menghapus Data "));
  } catch (error) {
    res.json(response.errorResponse("Gagal Menghapus Data "));
  }
};
exports.update = async (req, res) => {
  try {
    await Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        FID_Sebaran: req.body.FID_Sebaran,
        Longitude: req.body.Longitude,
        Latitude: req.body.Latitude,
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
    res.json(response.suksesResponse("Berhasil Update Data"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Update Data"));
  }
};
