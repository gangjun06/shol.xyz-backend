const { config } = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
var router = require("./router/main")(app);

app.use(cors());

app.listen(config.devPORT, () => {
  console.log(`App listening on ${config.devPORT}`);
});
