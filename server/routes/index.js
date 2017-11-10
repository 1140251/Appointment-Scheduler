const express = require('express');
const router = express.Router();
const mongoose = require('../config/mongoose');
const users = require('./users')(mongoose);

// return server status
router.get('/health', (req, res) => {
  mongoose.connection.readyState === 1 ? res.status(200).json({status: 'OK'}) : res.status(503).json({status: 'Service Unavailable. Please try again later.'})
});
router.use(users);

//
// function getTodos(res) {
//   Todo.find(function (err, todos) {
//
//     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//     if (err) {
//       res.send(err);
//     }
//
//     res.json(todos); // return all todos in JSON format
//   });
// }
//
// module.exports = function (server) {
//
//   // api ---------------------------------------------------------------------
//   // get all todos
//   server.get('/api/todos', function (req, res) {
//     // use mongoose to get all todos in the database
//     getTodos(res);
//   });
//
//   // create todo and send back all todos after creation
//   server.post('/api/todos', function (req, res) {
//
//     // create a todo, information comes from AJAX request from Angular
//     Todo.create({
//       text: req.body.text,
//       done: false
//     }, function (err, todo) {
//       if (err)
//         res.send(err);
//
//       // get and return all the todos after you create another
//       getTodos(res);
//     });
//
//   });
//
//   // delete a todo
//   server.delete('/api/todos/:todo_id', function (req, res) {
//     Todo.remove({
//       _id: req.params.todo_id
//     }, function (err, todo) {
//       if (err)
//         res.send(err);
//
//       getTodos(res);
//     });
//   });
//
//   // application -------------------------------------------------------------
//   server.get('*', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//   });
// };
module.exports = router;
