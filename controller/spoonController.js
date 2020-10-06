const axios = require("axios");
require("dotenv").config();
/* I think I might need more parameters for the url, so Iam creating an object,that will place the specified
api function, as well as ranking, number, etc.  */
const spoonAPI = {
  functions: {
    findByIngredients: "findByIngredients?",
    autocomplete: "autocomplete?",
    random: "random?",
  },
  number: "number",
  ranking: "ranking",
};
const { functions } = spoonAPI;
module.exports = {
  getRandomRecipes: (req, res) => {
    axios
      .get(
        `${process.env.SPOON_URL + functions.random}&${spoonAPI.number}=2&${
          process.env.SPOON_API_KEY
        }`
      )
      .then(({ data }) => {
        let spoonData = data.recipes;
        res.json(spoonData);
      })
      .catch((err) => console.log(err));
  },
  getAutocomplete: (req, res) => {
    axios
      .get(
        `${process.env.SPOON_URL + functions.autocomplete}&
      ${spoonAPI.number}=3&q=
      ${req.body}&
      ${process.env.SPOON_API_KEY}`
      )
      .then(({ data }) => {
        let spoonData = data.recipes;
        res.json(spoonData);
      })
      .catch((err) => console.log(err));
  },
};
