const { config } = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const fs = require("fs");
const http = require("http");
const https = require("https");
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

// api docs setup
const swaggereOptions = {
  swaggerDefinition: {
    info: {
      title: "Shol API",
      version: "1.0.0",
      description: "API for short url",
    },
    host: "https://shol.xyz",
    basePath: "/",
  },
  apis: ["./router/*.js"],
};

const specs = swaggereJsdoc(swaggereOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// mongodb setup
mongoose.connect(config.mongodbURL);

mongoose.connection.once("open", () => {
  console.log("successed to connect mongodb");
});

// settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static("public"));

// 망할 cross origin
app.use(cors());

// router 설정
require("./router/main")(app);

app.listen(config.devPORT);
