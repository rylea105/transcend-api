module.exports = (app) => {
    const log = require('../controllers/log.controller.js');

    app.get('/getalllog',log.findAll);
}
