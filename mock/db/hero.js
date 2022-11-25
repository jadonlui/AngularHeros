const axios = require("axios");

module.exports = (req, res) => {
  // const response = await axios.get("http://localhost:3000/api/heroes");
  // const data = await response.data;

  const { id } = req.body;

  return { id: 13, name: "Bombasto" };
};
