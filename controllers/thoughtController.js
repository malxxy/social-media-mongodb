const Thought = require('../models/Thought');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // get single thought with id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .populate('thoughts')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user found' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // post to create a new thought
    createThought(req,res) {
        Thought.create(
            {thoughtText: req.body.thoughtText},
            {username: req.body.username}
          )
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // put route to update a thought by id
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
            { runValidators: true, new: true }
          )
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
    },

    // delete to remove a thought by its id
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params._id },
        )
            .then((thought) =>
              !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.status(200).json(thought, { message: 'thought deleted'})
            )
            .catch((err) => res.status(500).json(err));
          },

    // api/thoughts/:thoughtId/reactions
    addReaction(req,res) {
        // post to create a reaction stored in single thought array 
       Thought.findOneAndUpdate(
        { _id: req.params._id },
        { $addToSet: {reactions: req.body}},
        { runValidators: true, new: true} // validate that  body has all aspects of reaction schema
        // new true grabs the new data to return
        )
        .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err)); 
    },
    
    deleteReaction(req,res) {
        // delete  to pull and remove a reaction by reaction's reaction Id value
        Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $pull: {reactions: {reactionId: req.params.reactionId}},
            { runValidators: true, } // validate that  body has all aspects of reaction schema
        )
    }
}