module.exports = verifyToken = (req, res, next) => {
  const jwt = require('jsonwebtoken');

  console.log(req.headers.authorization);
  if (!(req.headers && req.headers.authorization)) {
    return res.status(403).json({
      status: 'No token provided.'
    });
  }
  let header = req.headers.authorization.split(' ');
  let token = header[1];
  if (!token) return res.status(403).send({
    auth: false,
    message: 'No token provided.'
  });

  jwt.verify(token, 'TheSecret_123456789', (err, decoded) => {
    if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token. '});
    req.user = decoded.user;
    next();
  });
};