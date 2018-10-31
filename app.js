const express = require('express');
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

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

// // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// // parse requests of content-type - application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);


});

require('./app/routes/resource.routes.js')(app);
require('./app/routes/software.routes.js')(app);
require('./app/routes/instanceInfo.routes.js')(app);
require('./app/routes/createInstance.routes.js')(app);
require('./app/routes/instance.routes.js')(app);
require('./app/routes/log.routes.js')(app);
require('./app/routes/pricing.routes.js')(app);
require('./app/routes/user.routes.js')(app);

