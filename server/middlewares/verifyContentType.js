module.exports = verifyContentType = (req, res, next) => {

  let contentType = req.headers['content-type'];
  console.log(contentType);
  if (!contentType || contentType.indexOf('application/json') !== 0){
    return res.sendStatus(406);
  }
  next();
};