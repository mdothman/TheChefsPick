const router = require("express").Router();
const spoonController = require('../../controller/spoonController')

router.route('/')
.get(spoonController.getRandomRecipes)



module.exports = router;