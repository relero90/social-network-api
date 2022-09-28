const router = require("express").Router();
const {
  getUsers,
  createUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
  addFriend,
  deleteFriend,
} = require("../../controller/user-controller");

// end point --> /api/users/
router
  .route("/")
  // GET all users
  .get(getUsers)
  // POST a new user
  // req.body = { "username": "lernantino", "email": "lernantino@gmail.com"}
  .post(createUser);

// end point --> /api/users/:id
router
  .route("/:id")
  // GET a single user by its _id and populated thought and friend data
  .get(getOneUser)
  // PUT to update a user by its _id
  .put(updateOneUser)
  // DELETE to remove user by its _id
  // BONUS --> remove a user's associated thoughts when deleted
  .delete(deleteOneUser);

// end point --> /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  // POST to add a new friend to a user's friend list
  .post(addFriend)
  // DELETE to remove a friend from a user's friend list
  .delete(deleteFriend);

module.exports = router;
