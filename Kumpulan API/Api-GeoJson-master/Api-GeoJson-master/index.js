
const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const bodyParser = require('body-parser')
const db = require('./Config/database')
global.__basedir = __dirname;
app.use(cors())
app.use(cors())
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  extended:true,
  limit: '50mb'
}))
db.connectToDb
global.__basedir = __dirname;
app.use(express.static('static'))
app.use(express.static(__dirname + '/data'));
app.use(express.static('public/uploads'));
app.use('/bts', require('./Router/Router_Bts'))
app.use('/signal_strength', require('./Router/Router_Kuat_Signal'))
app.use('/signal_booster', require('./Router/Router_Penguat_Signal'))
app.use('/bts_plan', require('./Router/Router_BtsPlan'))
app.get("/", (req, res) => {
  res.json({ message: "Selamat Datang" });
});
app.listen(port, function(){
  console.log('Berjalan Di port:' + port)
})