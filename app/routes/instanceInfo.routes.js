module.exports = (app) => {
    const instanceInfo = require('../controllers/instanceInfo.controller.js');

    app.get('/info', instanceInfo.findAll);

}
