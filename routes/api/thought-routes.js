// end point --> /api/thoughts/
const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getOneThought,
  updateOneThought,
  deleteOneThought,
  createReaction,
  deleteReaction,
} = require("../../controller/thought-controller");

// end point --> /api/thoughts/
router.route("/").get(getThoughts).post(createThought);

// end point --> /api/thoughts/:id
router
  .route("/:id")
  .get(getOneThought)
  .put(updateOneThought)
  .delete(deleteOneThought);

// end point --> /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
