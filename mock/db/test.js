const heroes = require("./heroes");

module.exports = {
  get: async (req, res) => {
    console.log('hero controlor test')
    const { id } = req.body;
    const tempHero = await heroes(req, res);
    const realHero = tempHero.find((x) => Number(x.id) === Number(id));
    return res.status(200).json({ id: req.body.id, name: realHero.name });
  },
};
