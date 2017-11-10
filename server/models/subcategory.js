module.exports = (mongoose) => {

  let Schema = mongoose.Schema;

// Defining schema for subcategory
  const subCategorySchema = new Schema({
    name: {type: String, required: true},
    published_at: {
      type: Date,
      default: Date.now, required: true
    },
    posts: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
    ]
  });

  //categorySchema.index({'$**': 'text'});


  return mongoose.model('SubCategory', subCategorySchema);
};
