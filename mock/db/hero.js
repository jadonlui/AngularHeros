const { async } = require("rxjs");
const heroes = require("./heroes");

/**
 *
 * @param req 用post呼叫http://localhost:3000/api/hero後，所帶的值
 * @returns 所選英雄之id與幾本資料
 */
module.exports = async (req, res) => {

  const { id } = req.body;
  const tempHero = await heroes(req, res);
  // console.log("heroes", tempHero);

  const realHero = tempHero.find((x) => Number(x.id) === Number(id));
  // console.log("realHero",id, realHero);


  return { id: req.body.id, name: realHero.name };
};
