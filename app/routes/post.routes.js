module.exports = (app) => {
   const post = require('../controllers/post.controller.js');
   const cors = require('cors');

   app.post('/post',cors(), post.add);
   app.put('/post/:id',cors(), post.edit);
   app.get('/getpost',cors(), post.findAll);
   app.post('/checkreq',cors(), post.checkreq);
}

