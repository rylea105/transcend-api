const express = require('express');
const app = express();
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var http = require('http').Server(app);
const io = require('socket.io')(http);

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
http.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);


});


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', function(msg){
      io.emit('message', msg);
    });
  });

require('./app/routes/resource.routes.js')(app);
require('./app/routes/software.routes.js')(app);
require('./app/routes/instanceInfo.routes.js')(app);
require('./app/routes/createInstance.routes.js')(app);
require('./app/routes/instance.routes.js')(app);
require('./app/routes/log.routes.js')(app);
require('./app/routes/pricing.routes.js')(app);
require('./app/routes/user.routes.js')(app);

var Message = mongoose.model('Message',{
  name : String,
  message : String
})

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})


