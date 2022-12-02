const heroesdata = require("./heroesdata");
const heroes = require("./heroes");

module.exports = {
  get: async (req, res) => {
    try {
      //  throw Error('error get')測試用

      const { id } = req.body;

      const tempHero = await heroes.get(req, res);

      const realHero = tempHero.find((x) => Number(x.id) === Number(id));
      return res.status(200).json({ id: req.body.id, name: realHero.name });
    } catch (error) {
      return res.status(500).send({
        code: 400,
        message: "" + error,
      });
    }
  },
  getAll: (req, res) => {
    try {
      console.log("get heroes");
      return res.status(200).json([
        { id: 12, name: "Dr. Nice" },
        { id: 13, name: "Bombasto" },
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" },
        { id: 17, name: "Dynama" },
        { id: 18, name: "Dr. IQ" },
        { id: 19, name: "Magma" },
        { id: 20, name: "Tornado" },
      ]);
    } catch (error) {
      return res.status(500).send({
        code: 400,
        message: "" + error,
      });
    }
  },
};
