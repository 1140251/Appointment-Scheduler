let {mongoDB} = require('./database')[process.env.NODE_ENV];

const mongoose = require('mongoose');
console.log(mongoDB);
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection refused !!!!!'));
module.exports = mongoose;