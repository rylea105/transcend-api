module.exports = (app) => {
   const post = require('../controllers/post.controller.js');
   const cors = require('cors');

   app.post('/post', post.add);
   app.put('/post/:id', post.edit);
   app.get('/getpost', post.findAll);
   app.post('/checkreq', post.checkreq);
}

