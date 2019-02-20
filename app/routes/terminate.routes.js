module.exports = (app) => {
    const terminate = require('../controllers/terminate.controller.js');

    app.post('/terminate', terminate.terminateId);
    app.get('/terminateId', terminate.findAllTerminate);
    app.post('/terminateInstance', terminate.terminateInstance);

}