const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
server.use(express.static('public'));
server.use(express.urlencoded(({extended:true})));

nunjucks.configure("src/pages", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render(`index.html`);
});

server.listen(3333,() =>{
    console.log('Server Running 3333');
});
