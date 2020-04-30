module.exports = (app) => {
  app.get("/", (req, res) => {
      res.render('index')
  });

  app.post('/api/shorturl', (req, res)=>{
      var { url } = req.body
      if(!url.startWith("http://") && !url.startWith('https://')){
            url = "http://"+String(url)
      }
  } )
};
