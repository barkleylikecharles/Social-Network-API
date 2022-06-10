const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    // addFriend,
    // removeFriend,
  } = require('../../controllers/users-controller');
// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // Set up POST and DELETE for Friends
// router.route('/:id/friends/:friendsId').post(addFriend).delete(removeFriend);

module.exports = router;