module.exports = (app) => {
    const createInstance = require('../controllers/createInstance.controller.js');

    app.post('/create',createInstance.command);
    app.get('/test',createInstance.test);
    app.post('/terminate', createInstance.terminate);
}
