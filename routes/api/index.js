const router = require("express").Router();
const VideogameRoutes = require("./videoGame");

// Videogame routes
router.use("/videoGame", VideogameRoutes);

module.exports = router;
