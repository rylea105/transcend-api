module.exports = (app) => {
   const post = require('../controllers/post.controller.js');

   app.post('/post', post.add);
   app.post('/post/:id', post.edit);
}

