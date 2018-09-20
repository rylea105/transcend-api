module.exports = (app) => {
   const post = require('../controllers/post.controller.js');

   app.post('/post', post.add);

}

