const router = require('express').Router();
const {
    // get all thoughts
    // get single thought with id
    // post to create a new thought (push thoughts id array to associated user's thoughts array field 
    // put route to update a thought by id
    // delete to remove a thought by its id
} = require('../../controllers/thoughtController');


// post to create a reaction stored in single thought array 
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// delete  to pull and remove a reaction by reaction's reaction Id value

module.exports = router;