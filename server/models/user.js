module.exports = (mongoose) => {

  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: { type: String, unique: true, trim: true, required: true },
    email: { type: String, unique: true, trim: true, required: true },
    password: { type: String, required: true, minlength: 4 },
    role: { type: String,enum: ['SuperAdmin', 'Admin'], required: true}
  }, { timestamps: true });

  /*   userSchema.methods.comparePassword = function(password) {
      return bcrypt.compareSync(password, this.hash_password);
    }; */


  return mongoose.model('User', userSchema);
};
