// set up ======================================================================
const express = require('express');
const app = express(); 						// create our server w/ express	// mongoose for mongodb	// set the port	// load the database config
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const path = require('path');
console.log(process.env.NODE_ENV);
const {port, host} = require('./server/config/database')[process.env.NODE_ENV];

app.use(express.static(path.join(__dirname, 'dist'))); 		// set the static files location -Angular 4
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
// server.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
// server.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
//
//
app.listen(port, host);


// routes ======================================================================
app.use('/api', routes);

// listen (start server with node server.js) ======================================

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log('App listening on port ' + port);

app.use((req, res, next) => {
  let err = new Error('Service Unavailable. Please try again later.');
  err.status = 503;
  next(err);
});

