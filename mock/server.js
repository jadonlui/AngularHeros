var jsonServer = require("json-server");
var fs = require("fs");
var server = jsonServer.create();
var router = jsonServer.router("./db.json");
var middleWares = jsonServer.defaults();
var db = require("./db/index");
let con = 0;
/**
 * json server
 */

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
  console.log("type", x, x.type);
  let temptype = "";
  temptype = x.type;
  console.log('temptype',temptype)
  // server.temptype(x.path, async function (req, res) {
  //   const data = await db[x.key](req, res);
  //   console.log("data123", data);
  //   res.status(200).json(data);
  // });
  /**改寫get post router */
  server[x.type](x.path, async function (req, res) {
    const data = await db[x.key](req, res);
    console.log('db[x.key]',db[x.key](req, res))
    con++;
    console.log("data123", data,con);
    res.status(200).json(data);
  });
});
//service
// server["get"]("/api/test", function (req, res) {
//   console.log("asdasd");
//   res.status(200).json({ status: "您好" });
// });
server.get("/api/test", function (req, res) {
  console.log("asdasd");
  res.status(200).json({ status: "您好1" });
});
// server.get("/api/heroes", function (req, res) {
//   res.status(200).json(db.heroes);
// });
// server.post("/api/hero", function (req, res) {
//   res.status(200).json(db.hero(req, res));
// });

// Use default router
// server.use(router);
server.listen(3000, "0.0.0.0", function () {
  console.log("http://localhost:3000 JSON Server is running");
});
