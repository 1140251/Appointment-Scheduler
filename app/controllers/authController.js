module.exports = (mongoose) => {

  const User = require('../models/user')(mongoose);
  const jwt = require('jsonwebtoken'), bcrypt = require('bcrypt');

  function hasRole(username, role, func) {
    User.findOne({username: username}, function (err, user) {
      if (err) throw err;
      if (!user) {
        res.json({success: false, message: 'Authentication failed.'});
      } else if (user) {
        func(role === 'administrator' && user.isAdmin === true)
      }
    });
  }

  return {
    register: (req, res) => {
      console.log('registering new user');
      let user = new User();
      user.password = bcrypt.hashSync(req.body.password, 8);
      user.username = req.body.username;
      user.isAdmin = req.body.isAdmin;
      user.save((err, user) => {
        if (err) return res.status(400).send({message: err});
        res.json({message: "User registered!", user});
      });
    },

    login: (req, res) => {

      User.findOne({username: req.body.username}, (err, user) => {
        if (err) throw err;
        if (!user) {
          res.json({
            success: false,
            message: 'Authentication failed.'
          });
        } else if (user) {
          if (!bcrypt.compareSync(req.body.password, user.password)) return res.status(401).send({
            auth: false,
            token: null,
            message: 'Authentication failed.'
          }); else {
            const payload = {user: user.username};
            let theToken = jwt.sign(payload, 'TheSecret_123456789', {expiresIn: 86400});
            res.json({success: true, message: 'Enjoy your token!', token: theToken});
          }
        }
      });
    },
    logout: (req, res) => {


    },

    loginRequired:
      (req, res, next) => {
        if (req.user) {
          next();
        } else {
          return res.status(401).json({message: 'Unauthorized user!'});
        }
      }
  }
    ;
}
;