module.exports = (app) => {
    const instanceInfo = require('../controllers/InstanceInfo.controller.js');

    app.get('/info', instanceInfo.findAll);

}
