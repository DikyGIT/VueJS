const mongoose = require('mongoose')
const mongoURL ='mongodb://survey:$Urrv3Y!@dbmongo2.pptik.id:27017/survey';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil Konek ke Mongo')
    });