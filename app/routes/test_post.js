module.exports = (app) => {
    const post = require('../controllers/post.controller.js');

    app.post('/post', post.create);

}

module.exports = (app) => {
    const post = require('../controllers/post.controller.js');

    app.put('/post/:number', post.edit);

}
