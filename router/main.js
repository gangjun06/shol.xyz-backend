const Url = require("../models/url");

const ShortUniquedId = require("short-unique-id").default;
const uid = new ShortUniquedId();

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.post("/", (req, res) => {
    let url = req.query.url;

    if (!url) {
      res.writeHead(500);
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + String(url);
    }

    Url.findOne({ longurl: url }, (err, theUrl) => {
      if (err) res.writeHead(500);

      if (theUrl) {
        res.json({ short: theUrl.short });
      } else {
        let id = uid.randomUUID(5);
        Url({
          longurl: url,
          short: id,
        }).save();
        res.json({ short: id });
      }
    });
  });

  app.get("/:urlCode", (req, res) => {
    var url = String(req.params.urlCode);

    Url.findOne({ short: url }, (err, theUrl) => {
      if (err) res.writeHead(500);

      if (theUrl) {
        res.writeHead(301, { Location: String(theUrl.longurl) });
        res.end();
      } else {
        res.render("notfound");
      }
    });
  });
};
