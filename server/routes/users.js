const express = require('express');
const router = express.Router();


module.exports = (mongoose) => {
  const usersController = require('../controllers/userController')(mongoose);
  router.post('/login', usersController.login);
  router.post('/register', usersController.register);
  router.get('/users/:id', usersController.getUser);
  router.get('/users', usersController.getUsers);
  return router;
};
