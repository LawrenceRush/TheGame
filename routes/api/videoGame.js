const router = require("express").Router();
const VideoGameController = require("../../controllers/VideoGameController");

// Matches with "/api/books"
router.route("/")
  .get(VideoGameController.findAll)
  .post(VideoGameController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(VideoGameController.findById)
  .put(VideoGameController.update)
  .delete(VideoGameController.remove);

module.exports = router;
