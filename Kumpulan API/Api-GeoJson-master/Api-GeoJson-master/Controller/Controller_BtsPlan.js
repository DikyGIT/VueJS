/*
Bandung Indonesia
*/
const ModelBts = require("../Model/Model_BtsPlan");
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
        resolve(response.suksesResponse("Berhasil Menambah Data "))
      )
      .catch(() => reject(response.errorResponse("Gagal Menambah Data ")));
  });

exports.delete = async (req, res) => {
  try {
    await ModelBts.findOneAndDelete({ _id: req.params.id });
    res.json(response.suksesResponse("Berhasil Menghapus Data "));
  } catch (error) {
    res.json(response.errorResponse("Gagal Menghapus Data "));
  }
};
exports.update = async (req, res) => {
  try {
    await ModelBts.findOneAndUpdate(
      { _id: req.params.id },
      {
        NamaPenyewa:req.body.NamaPenyewa,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Alamat: req.body.Alamat,
        Regional: req.body.Regional,
        Tinggi: req.body.Tinggi,
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
