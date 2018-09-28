module.exports = (app) => {
    const createInstance = require('../controllers/createInstance.controller.js');

    app.post('/create',createInstance.command);
    app.post('/test',createInstance.test);
    app.post('/checkcicd',createInstance.checkreq);

}
