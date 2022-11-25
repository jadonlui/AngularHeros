var jsonServer = require("json-server");
var fs = require("fs");
var server = jsonServer.create();
var router = jsonServer.router("./db.json");
var middleWares = jsonServer.defaults();
var db = require("./db/index");

// middleWares
server.use(jsonServer.bodyParser);
server.use(middleWares);

//service
server.get("/api/test", function (req, res) {
  res.status(200).json({ success: false });
});
server.get("/api/heroes", function (req, res) {
  res.status(200).json(db.heroes);
});
server.post("/api/hero", function (req, res) {
  res.status(200).json(db.hero(req, res));
});

// Use default router
server.use(router);
server.listen(3000, "0.0.0.0", function () {
  console.log("http://localhost:3000 JSON Server is running");
});
