const User = require('../models/User');

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // get single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(
      {username: req.body.username},
      {email: req.body.email}
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update a user by  id 
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {username: req.body.username},
      {email: req.body.email}
    ) 
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // delete a user by id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params._id },
    )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : Thought.deleteMany({ _id: { $in: user.thoughts }, message: 'User and all thoughts deleted'})
    )
    .catch((err) => res.status(500).json(err));
  },
};