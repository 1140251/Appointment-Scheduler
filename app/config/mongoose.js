let {mongoDB} = require('./app.json')[process.env.NODE_ENV];

const mongoose = require('mongoose');
console.log(mongoDB);
mongoose.connect(mongoDB, {
  useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection refused !!!!!'));
module.exports = mongoose;