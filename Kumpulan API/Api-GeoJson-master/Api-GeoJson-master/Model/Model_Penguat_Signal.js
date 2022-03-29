const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({ 
        FID_Sebaran:{type:String},       
        Longitude:{type:String},
        Latitude:{type:String},
        Pemilik:{type:String},
        Pengguna:{type:String},
        Tinggi:{type:String},
        Alamat:{type:String},
        FID_BATAS_:{type:String},
        OBJECTID:{type:String},
        Provinsi:{type:String},
        Kecamatan:{type:String},
        Desa:{type:String}
   
})
module.exports = mongoose.model('penguat_signal', UserSchema)