const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// get all thoughts
router.route('/').get(getThoughts)

// post new thought with user ID
router.route('/:userId').post(createThought);

// get, update, and delete thought by Id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// post reaction by thought Id
router.route('/:thoughtId/reactions').post(addReaction);

// delete reaction by Id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;