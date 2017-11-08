module.exports = (mongoose) => {

  const modelUser = require('../models/user')(mongoose);
  mongoose.Promise = global.Promise;

  return {
    getUser: (req, res) => {
      modelUser.findById(req.params.user_id, (err, question) => {
        if (err) {
          return res.sendStatus(404);
        }
        res.status(200).send(question);
      });
    }
  }

};