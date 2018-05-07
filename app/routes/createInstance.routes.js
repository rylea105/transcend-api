module.exports = (app) => {
    const createInstance = require('../controllers/createInstance.controller.js');

    app.post('/create', createInstance.command);

}
