const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users');
const passportAuth = passport.authenticate('jwt', { session: false });

router
  .get('/', passportAuth, userController.index)
  .get('/:userId', passportAuth, userController.findOne)
  .post('/', passportAuth, userController.new)
  .put('/:userId', passportAuth, userController.update)
  .delete('/:userId', passportAuth, userController.delete)

module.exports = router;
