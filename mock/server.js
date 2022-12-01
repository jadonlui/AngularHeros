var jsonServer = require("json-server");
var fs = require("fs");
var server = jsonServer.create();
var router = jsonServer.router("./db.json");
var middleWares = jsonServer.defaults();
var db = require("./db/index");

// middleWares
server.use(jsonServer.bodyParser);
server.use(middleWares);
const routers = [
  {
    type: "get",
    path: "/api/heroes",
    key: "heroes",
  },
  {
    type: "get",
    path: "/api/hero/:id",
    key: "hero",
  },
  {
    type: "post",
    path: "/api/hero",
    key: "hero",
  },
];
routers.forEach((x) => {
  server[x.type](x.path, async function (req, res) {
    // console.log("db[x.key]", x.key);
    // console.log("db[x.key]", db[x.key]);
    const data = await db[x.key](req, res);
    res.status(200).json(data);
  });
});
//service
server.get("/api/test", function (req, res) {
  res.status(200).json({ success: false });
});

// server.get("/api/heroes", function (req, res) {
//   res.status(200).json(db.heroes);
// });
// server.post("/api/hero", function (req, res) {
//   res.status(200).json(db.hero(req, res));
// });

// Use default router
server.use(router);
server.listen(3000, "0.0.0.0", function () {
  console.log("http://localhost:3000 JSON Server is running");
});
