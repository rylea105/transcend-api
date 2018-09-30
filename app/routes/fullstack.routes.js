module.exports = (app) => {
    const fullstack = require('../controllers/fullstack.controller.js');

    app.get('/getfullstack', fullstack.findAll);
    app.post('/postfullstack', fullstack.postfullstack);

}