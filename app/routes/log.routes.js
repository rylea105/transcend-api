module.exports = (app) => {
    const log = require('../controllers/log.controller.js');

    app.get('/getlog', log.findAll);
    app.post('/postlog', log.post);
}
