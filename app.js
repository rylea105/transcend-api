const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');

var cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 3000;

const mongoOptions = {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD
}

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url,mongoOptions)

.then(() => {
    console.log("Successfully connected to the database");

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Set up a whitelist and check against it:
var whitelist = ['http://site.kittitat.tk', 'http://api.kittitat.tk']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//Use cors
app.use(cors(corsOptions));




// listen for requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);


});

// Require Hellos routes
// require('./app/routes/hello.routes.js')(app);
require('./app/routes/resource.routes.js')(app);
require('./app/routes/software.routes.js')(app);
require('./app/routes/instanceInfo.routes.js')(app);
require('./app/routes/post.routes.js')(app);

app.get('/create', (req, res) => {
  res.json({"message": "Creating EC2 Instance"});
  const createInstance = require('./app/models/createInstance.model.js');

});
