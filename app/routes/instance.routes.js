module.exports = (app) => {
    const instance = require('../controllers/instance.controller.js');

    app.post('/getinstance', instance.findAll);
    app.post('/postinstance', instance.postInstance);
}