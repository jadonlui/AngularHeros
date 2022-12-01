const { async } = require("rxjs");
const heroes = require("./heroes");

module.exports = async (req, res) => {

  const { id } = req.body;
  const tempHero = await heroes(req, res);
  console.log("heroes", tempHero);

  const realHero = tempHero.find((x) => Number(x.id) === Number(id));
  console.log("realHero",id, realHero);


  return { id: req.body.id, name: realHero.name };
};
