const { async } = require("rxjs");
const heroes = require("./heroes");

module.exports = async (req, res) => {
  // console.log(data);
  const { id } = req.body;
  const tempHero = await heroes(req, res);
  console.log("heroes", tempHero);

  const realHero = tempHero.find((x) => Number(x.id) === Number(id));
  console.log("realHero",id, realHero);
  // const lists = [];
  // if (lists.length === 0) {
  //   return {};,
  // } else {
  //   return lists.filter((d) => d.id === Number(id).flat());
  // }
  // console.log("req.id,data", id,data);
  return { id: req.body.id, name: realHero.name };
};
