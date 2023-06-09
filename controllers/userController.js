const User = require('../models/User');

module.exports = {
  // get all users DONE
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // get single user by id DONE
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      // .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user DONE
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update a user by id DONE
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body},
      { runValidators: true, new: true }
    ) 
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete a user by id
deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      // if the user was successfully deleted, return a success message
      res.json({ message: 'User deleted' });
    })
    .catch((err) => res.status(500).json(err));
  },
};