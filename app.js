const { config } = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

mongoose.connect(config.mongodbURL)

mongoose.connection.once('open', ()=>{
    console.log('successed to connect mongodb')
})

// settings
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));


// 망할 cross origin
app.use(cors());

// router 설정
require("./router/main")(app);

app.listen(config.devPORT, () => {
  console.log(`App listening on ${config.devPORT}`);
});
