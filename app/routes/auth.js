const express = require('express');
const router = express.Router();


module.exports = (mongoose) => {
  const authController = require('../controllers/authController')(mongoose);
  router.get('/login', authController.login);
  router.get('/logout', authController.logout);
  return router;
};