module.exports = (mongoose) => {

  mongoose.Promise = global.Promise;

  const User = require('../models/user')(mongoose);
  const jwt = require('jsonwebtoken'), bcrypt = require('bcrypt');
  const _ = require('underscore');
  const dateFormat = require('dateformat');

  return {
    register: (req, res) => {
      let user = new User();
      user.password = bcrypt.hashSync(req.body.password, 8);
      user.username = req.body.username;
      user.email = req.body.email;
      user.role = req.body.role || 'Admin';
      user.isAdmin = req.body.isAdmin;
      user.save((err, user) => {
        if (err) {
          if (err.code === 11000 || err.code === 11001) {
            // Duplicate username
            return res.status(409).send({ message: 'User already exist!' });
          } else {
            return res.status(404).send({ message: err });
          }
        }
        res.status(201).json({ message: 'User registered!', user });
      });
    },

    login: (req, res) => {

      User.findOne({ username: req.body.username }, (err, user) => {
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
            const payload = { user: user.username };
            let theToken = jwt.sign(payload, 'TheSecret_123456789', { expiresIn: 86400 });
            res.json({ success: true, message: 'Enjoy your token!', token: theToken, user: { name: user.username, role: user.role } });
          }
        }
      });
    },

    getUser: (req, res) => {
      User.findById(req.params.id, 'id username email role', (err, user) => {
        if (err) {
          return res.sendStatus(404);
        }
        res.status(200).send(user);
      });
    },

    getUsers: (req, res) => {

      let perPage = 9;
      let page = req.query.page || 1;
      console.log(page);
      User.find({}, 'id username email role createdAt')
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, users) => {
          if (err) {
            return res.sendStatus(404);
          }
          const tempUsers = _.map(users, function (user) {
            return { id: user._id, username: user.username, email: user.email, role: user.role, createdAt: dateFormat(user.createdAt, 'yyyy-mm-dd HH:MM:ss') };
          });

          User.count().exec(function (err, count) {
            if (err) {
              return res.sendStatus(404);
            }
            const data = {
              'users': tempUsers,
              'current': page,
              'pages': Math.ceil(count / perPage)
            };
            res.status(200).send(data);

          });

        });
    },

    deleteUser: (req, res) => {
      console.log('delete user backend');
      User.remove({ _id: req.params.id }, function (err) {
        if (err) {
          return res.sendStatus(404);
        }
        res.sendStatus(200);
      }); // and so on

    },

    putUser: (req, res) => {
      User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
          return res.sendStatus(404);
        }
        res.status(200).json({ message: 'User Updated!', user });
      });
    }
  };
};
