const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // get single thought with id
    getSingleThought(req, res) {
        // code
    },
    // post to create a new thought
    createThought(req,res) {
        Thought.create(req.body)
        // don't forget to push the created thought's _id to the associated user's thoughts array field
    },
    // put route to update a thought by id
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
    },

    // delete to remove a thought by its id
    deleteThought(req,res) {
        Thought.findOneAndDelete(
            { _id: req.params._id },
        )
    },

    // api/thoughts/:thoughtId/reactions
    addReaction(req,res) {
        // post to create a reaction stored in single thought array 
       Reaction.create(req.body)
    },
    
    deleteReaction(req,res) {
        // delete  to pull and remove a reaction by reaction's reaction Id value
        Reaction.findOneAndDelete(
            { _id: req.params.thoughtId },
        )
    }
}