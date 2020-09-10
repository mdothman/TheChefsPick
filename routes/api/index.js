const router = require("express").Router();
const bookRoutes = require("./recipes");

// Book routes
router.use("/recipes", bookRoutes);

module.exports = router;