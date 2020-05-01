const { config } = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");

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

if (process.env.NODE_ENV === "production") {
  const privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/gangjun.duckdns.org/privkey.pem",
    "utf-8"
  );
  const certificate = fs.readFileSync(
    "/etc/letsencrypt/live/gangjun.duckdns.org/cert.pem",
    "utf-8"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/gangjun.duckdns.org/chain.pem",
    "utf-8"
  );
  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
  };
  https.createServer(credentials, app).listen(8443, () => {
    console.log("HTTPS Server Running on port 8443");
  });
  http
    .createServer((req, res) => {
      res.writeHead(301, {
        Location: "https://" + req.headers["host"] + req.url,
      });
    })
    .listen(8080);
} else {
  app.listen(config.devPORT);
}
