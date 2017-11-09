const express = require('express');
const router = express.Router();


module.exports = (mongoose) => {
  const authController = require('../controllers/authController')(mongoose);
  router.post('/api/login', authController.login);
  router.post('/api/register', authController.register);
  return router;
};