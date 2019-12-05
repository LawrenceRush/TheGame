const router = require("express").Router();
const gameRoutes = require("./game");

// game routes
router.use("/title", gameRoutes);

module.exports = router;
