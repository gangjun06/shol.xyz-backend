module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("a");
  });
  app.get("/docs", (req, res) => {
    res.send("a");
  });
};
