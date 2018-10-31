module.exports = (app) => {
    const log = require('../controllers/log.controller.js');

    app.post('/getlog', log.findAll);
    app.post('/postlog', log.post);
}
