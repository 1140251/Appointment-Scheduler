

modules.export = (mongoose)=> {

  const modelUser = require('../models/question')(mongoose);
  mongoose.Promise = global.Promise;
  return {

    login: (req, res) => {
    },
    logout: (req, res) => {
    }
  };
};