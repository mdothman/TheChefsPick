import axios from "axios";

export default {
  getRecipes: function () {
    return axios.get("/api/recipes");
  },

  getSingleRecipe: function (id) {
    return axios.get("/api/recipes" + id);
  },

  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id);
  },

  saveRecipes: function (recipeData) {
    return axios.post("/api/recipes", recipeData);
  },

  getInfo: (ids) => axios.get("/api/spoon/" + ids),

  getAutocomplete: (ingredient) =>
    axios.get("api/spoon/autocomplete/" + ingredient),

  getRecipe: (ingredientData) =>
    axios.get("api/spoon/recipes/" + ingredientData),
};
