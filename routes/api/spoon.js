const router = require("express").Router();
const spoonController = require('../../controller/spoonController')

router.route('/')
.get(spoonController.getRandomRecipes)

router.route('/recipes/:ingredients')
.get(spoonController.getRecipe)

router.route('/autocomplete/:ingredient')
.get(spoonController.getAutocomplete)





module.exports = router;