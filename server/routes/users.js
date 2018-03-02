const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const verifyContentType = require('../middlewares/verifyContentType');
module.exports = (mongoose) => {
  const usersController = require('../controllers/userController')(mongoose);
  router.post('/login', usersController.login);
  router.post('/register', usersController.register);
  router.get('/users', [verifyToken, verifyContentType], usersController.getUsers);
  router.post('/users', [verifyToken, verifyContentType], usersController.register);
  router.get('/users/:id', [verifyToken, verifyContentType], usersController.getUser);
  router.put('/users/:id', [verifyToken, verifyContentType], usersController.putUser);
  router.delete('/users/:id', [verifyToken, verifyContentType], usersController.deleteUser);


  return router;
};
