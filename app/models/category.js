module.exports = (mongoose) => {

  let Schema = mongoose.Schema;

// Defining schema for category
  const categorySchema = new Schema({
    name: {type: String, required: true},
    published_at: {
      type: Date,
      default: Date.now, required: true
    },
    sub_categories: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory'}
    ]
  });

  //categorySchema.index({'$**': 'text'});


  return mongoose.model('Category', categorySchema);
};
