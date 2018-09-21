module.exports = (app) => {
   const post = require('../controllers/post.controller.js');

   app.post('/post', post.add);
   app.put('/post/:id', post.edit);
   app.get('/getPost', post.findAll);
}

