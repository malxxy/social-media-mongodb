const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// get all users and create a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser) // get single user
  .update(updateUser) // update single user
  .delete(deleteUser); // delete single user

module.exports = router;