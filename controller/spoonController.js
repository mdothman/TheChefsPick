const axios = require("axios");
require("dotenv").config();
/* I think I might need more parameters for the url, so Iam creating an object,that will place the specified
api function, as well as ranking, number, etc.  */
const spoonAPI = {
  functions: {
    findByIngredients: "findByIngredients?",
    autocomplete: "autocomplete?",
    info: "informationBulk?ids=",
    list: "parseIngredients"
  },
  number: "number",
  ranking: "ranking",
};
const { functions } = spoonAPI;
module.exports = {
  getInfo: (req, res) => {
    axios
      .get(
        `${process.env.SPOON_RECIPES_URL + functions.info+req.params.ids}&${
          process.env.SPOON_API_KEY
        }`
      )
      .then(({ data }) => {
        let spoonData = data;
        res.json(spoonData);
      })
      .catch((err) => console.log(err));
  },
  getAutocomplete: (req, res) => {
    axios
      .get(
        `${process.env.SPOON_INGREDIENTS_URL + functions.autocomplete}query=${req.params.ingredient}&${spoonAPI.number}=2&${process.env.SPOON_API_KEY}`
      )
      .then(({ data }) => res.json(data))
      .catch((err) => console.log(err));
  },
  getRecipe:(req,res) =>{
    axios
    .get( `${process.env.SPOON_RECIPES_URL + functions.findByIngredients}ingredients=${req.params.ingredients}&${spoonAPI.number}=2&${spoonAPI.ranking}=2&${process.env.SPOON_API_KEY}`)
    .then(({ data }) => res.json(data))
      .catch((err) => console.log(err));
  }
  
  
};
