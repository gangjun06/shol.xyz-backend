const Url = require("../models/url");
const path = require("path");

const ShortUniquedId = require("short-unique-id").default;
const uid = new ShortUniquedId();

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  

  /**
   * @swagger
   *  /:
   *    post:
   *      tags:
   *      - url
   *      description: Make Short URL.
   *      produces:
   *        "applicatio/json"
   *      parameters:
   *      - name: url
   *        in: parms
   *        description: "URL you want to short"
   *        required: true
   *        type: string
   *      responses:
   *       200:
   *        description: 
   *        schema:
   *            $ref: '#/definitions/Result'
   *       500:
   *         description: "error while processing" 
   * definitions:
   *  Query:
   *    type: "object"
   *    properties:
   *      url:
   *        type: "string"
   *  Result:
   *    type: "object"
   *    properties:
   *      short:
   *        type: "string"
   *      longurl:
   *        type: "string"
   */
  app.post("/", (req, res) => {
    let url = req.query.url;

    if (!url) {
      res.writeHead(500, {});
      res.end();
      return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + String(url);
    }

    Url.findOne({ longurl: url }, (err, theUrl) => {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end();
        return;
      }

      if (theUrl) {
        res.json({ short: theUrl.short });
        return;
      } else {
        let id = uid.randomUUID(5);
        Url({
          longurl: url,
          short: id,
        }).save();
        res.json({ short: id });
        return;
      }
    });
  });

  app.get("/:urlCode", (req, res) => {
    var url = String(req.params.urlCode);

    Url.findOne({ short: url }, (err, theUrl) => {
      if (err) {
        res.writeHead(500);
        res.end();
      }

      if (theUrl) {
        res.writeHead(301, { Location: String(theUrl.longurl) });
        res.end();
      } else {
        res.render("notfound");
      }
    });
  });
};
