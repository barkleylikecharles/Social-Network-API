const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require('../../controllers/thoughts-controller');
// Set up GET all and POST at Thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at Thoughts\
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  // Set up POST and DELETE for Friends
route.route('/:id/thoughtId/:reactions').post(addReactions).delete(deleteReaction);

module.exports = router;