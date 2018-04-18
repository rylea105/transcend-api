module.exports = (app) => {
    const hello = require('../controllers/hello.controller.js');

    app.get('/hello', hello.findAll);

}
