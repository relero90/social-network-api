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
router.route("/").get(getUsers).post(createUser);

// end point --> /api/users/:id
router.route("/:id").get(getOneUser).put(updateOneUser).delete(deleteOneUser);

// end point --> /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
