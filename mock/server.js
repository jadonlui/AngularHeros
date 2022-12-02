var jsonServer = require("json-server");
var server = jsonServer.create();
var middleWares = jsonServer.defaults();
var db = require("./db/index");

// middleWares
server.use(jsonServer.bodyParser);
server.use(middleWares);

/** 測試用 */

server.get("/api/test", function (req, res) {
  res.status(200).json({ status: "您好1" });
});

/** 取得英雄列表 */
// server.get("/api/heroes", function (req, res) {
//   res.status(200).json(db.heroes.get(req,res));
// });
server.get("/api/heroes", db.hero.getAll);

/** 取得英雄詳細資料 */
server.post("/api/hero", db.hero.get);

//動態路由

// const routers = [
//   {
//     type: "get",
//     path: "/api/heroes",
//     key: "heroes",
//   },
//   {
//     type: "get",
//     path: "/api/hero/:id",
//     key: "hero",

//   },
//   {
//     type: "post",
//     path: "/api/hero",
//     key: "hero",
//   },
// ];
// routers.forEach((x) => {
//   console.log("type", x, x.type);
//   let temptype = "";
//   temptype = x.type;
//   console.log('temptype',temptype)
//   // server.temptype(x.path, async function (req, res) {
//   //   const data = await db[x.key](req, res);
//   //   console.log("data123", data);
//   //   res.status(200).json(data);
//   // });
//   /**改寫get post router */
//   server[x.type](x.path, async function (req, res) {
//     const data = await db[x.key](req, res);
//     console.log('db[x.key]',db[x.key](req, res))
//     con++;
//     console.log("data123", data,con);
//     res.status(500).json(data);
//   });
// });

// Use default router
// server.use(router);

server.listen(3000, "0.0.0.0", function () {
  console.log("http://localhost:3000 JSON Server is running");
});
