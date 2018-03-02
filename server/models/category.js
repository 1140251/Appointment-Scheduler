module.exports = (mongoose) => {

  let Schema = mongoose.Schema;

  // Defining schema for category
  const categorySchema = new Schema({
    name: { type: String, required: true }
  }, { timestamps: true });

  //categorySchema.index({'$**': 'text'});


  return mongoose.model('Category', categorySchema);
};
