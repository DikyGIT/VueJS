const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
        FID_Sebaran:{type:String},
        Latitude:{type:String},
        Longitude:{type:String},
        SinyalKuat:{type:String},
        SinyalLemah:{type:String},
        Blank_Spot:{type:String},
        Signal_Int:{type:String},
        FID_BATAS_:{type:String},
        OBJECTID:{type:String},
        Provinsi:{type:String},
        Kecamatan:{type:String},
        Desa:{type:String},
        Signal_Strength:{type:Number},
        Sumber:{type:String}

})
module.exports = mongoose.model('Kuat_signal', UserSchema)