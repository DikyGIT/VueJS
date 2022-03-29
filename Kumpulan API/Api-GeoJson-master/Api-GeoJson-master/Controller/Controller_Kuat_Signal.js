/*
 */
const Model = require("../Model/Model_Kuat_Signal");
const response = require("../Config/response");
const fs = require("fs");

exports.get = (data) =>
  new Promise((resolve, reject) => {
    Model.find().then((features) => {
      if (data.length == 0) {
        reject(response.errorResult());
      } else {
        resolve(
          Object.assign(response.suksesResponse("Succes"), {
            features: features,
          })
          // console.log(response.suksesResponse("Succes"), {
          //   data: data,})
          // const Json=response.suksesResponse("Succes"), {
          //   data: data,}
          // SaveJson(
          //   features)
        );
      }
    });
  });

exports.add = (data) =>
  new Promise((resolve, reject) => {
    Model.create(data)
      .then(() => resolve(response.suksesResponse("Berhasil Menambah Data ")))
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
        SinyalKuat: req.body.SinyalKuat,
        SinyalLemah: req.body.SinyalLemah,
        Blank_Spot: req.body.Blank_Spot,
        Signal_Int: req.body.Signal_Int,
        FID_BATAS_: req.body.FID_BATAS_,
        OBJECTID: req.body.OBJECTID,
        Signal_Strength: req.body.Signal_Strength,
        Provinsi: req.body.Provinsi,
        Kecamatan: req.body.Kecamatan,
        Desa: req.body.Desa,
        Sumber: req.body.Sumber,
      }
    );
    res.json(response.suksesResponse("Berhasil Update Data"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Update Data"));
  }
};

function SaveJson(data) {
  // console.log(data)
  // var jsonObj = JSON.parse(data);
  // console.log(jsonObj);

  // stringify JSON Object
  var jsondata;
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }

  jsondata = {
    type: "FeatureCollection",
    name: "Intersec_Kuat_Signal_Internet_Desa",
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
    features: data,
    // geometry: {
    //   type: "Point",
    //   coordinates: [113.09185, -1.101995800000029]
    // }
  };
  var jsonContent = JSON.stringify(jsondata);
  // console.log(jsonContent);
  var jsonObj = JSON.parse(jsonContent);
  // console.log(jsonObj);

  fs.writeFile("./data/output.geojson", jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}
