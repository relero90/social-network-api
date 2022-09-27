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
router
  .route("/")
  // GET to get all thoughts
  .get(getThoughts)
  // POST to create a new thought
  // example data
  // {
  //   "thoughtText": "Here's a cool thought...",
  //   "username": "lernantino",
  //   "userId": "5edff358a0fcb779aa7b118b"
  // }
  .post(createThought);

// end point --> /api/thoughts/:id
router
  .route("/:id")
  // GET to get a single thought by its _id
  .get(getOneThought)
  // PUT to update a thought by its _id
  .put(updateOneThought)
  // DELETE to remove a thought by its _id
  .delete(deleteOneThought);

// end point --> /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  // POST to create a reaction stored in a single thought's reactions array field
  .post(createReaction)
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  .delete(deleteReaction);

module.exports = router;
