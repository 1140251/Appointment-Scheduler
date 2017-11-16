const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
module.exports = (mongoose) => {
  const usersController = require('../controllers/userController')(mongoose);
  router.post('/login', usersController.login);
  router.post('/register', usersController.register);
  router.get('/users/:id',verifyToken, usersController.getUser);
  router.get('/users',verifyToken, usersController.getUsers);
  return router;
};
