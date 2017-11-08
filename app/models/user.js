module.exports = (mongoose) => {

  //const bcrypt   = require('bcrypt-nodejs');
  let Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: {type: String, unique: true, trim: true, required: true},
    password: String
  });

  // userSchema.methods.validPassword = function (password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  //
  // userSchema.methods.generateHash = function (password) {
  //   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  // };


  return mongoose.model('User', userSchema);
};
