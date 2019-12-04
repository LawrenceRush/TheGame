const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// Matches with "/api/title"
router.route("/")
  .get(gameController.findAll);

// Matches with "/api/books/:id"

module.exports = router;
