module.exports = (mongoose) => {

  let Schema = mongoose.Schema;

  // Defining schema for post
  const postSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    robots_meta_tag: { type: String, required: true },
    meta_description: { type: String, required: true },
    meta_keywords: { type: String }
  }, { timestamps: true });

  //categorySchema.index({'$**': 'text'});


  return mongoose.model('Post', postSchema);
};
