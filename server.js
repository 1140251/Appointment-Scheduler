// set up ======================================================================
const express = require('express');
const app = express(); 						// create our app w/ express	// mongoose for mongodb	// set the port	// load the database config
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
console.log(process.env.NODE_ENV);
const {port, host} = require('./app/config/database')[process.env.NODE_ENV];

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
// app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
//
//
app.listen(port, host);


// routes ======================================================================
app.use('/', routes);

// listen (start app with node server.js) ======================================

console.log("App listening on port " + port);

app.use((req, res, next) => {
  let err = new Error('Service Unavailable. Please try again later.');
  err.status = 503;
  next(err);
});

