const router = require("express").Router();
const recipeRoutes = require("./recipes");
const spoonRoutes = require('./spoon');

// Book routes
router.use("/recipes", recipeRoutes);
router.use("/spoon", spoonRoutes);




module.exports = router;