const axios = require("axios");
require("dotenv").config();
module.exports = {
  getRandomRecipes: (req, res) => {
    axios
      .get(process.env.SPOON_URL + process.env.SPOON_API_KEY)
      .then(({ data }) => {
        let spoonData = data.recipes;
        res.json(spoonData);
      })
      .catch((err) => console.log(err));
  },
};
