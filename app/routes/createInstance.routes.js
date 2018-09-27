module.exports = (app) => {
    const createInstance = require('../controllers/createInstance.controller.js');

    app.get('/create', createInstance.command);
    // app.get('/test',createInstance.test);

}
