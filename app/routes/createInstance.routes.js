module.exports = (app) => {
    const createInstance = require('../controllers/createInstance.controller.js');

    app.post('/create:access_key', createInstance.command);

}
