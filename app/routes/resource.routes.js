module.exports = (app) => {
    const resource = require('../controllers/resource.controller.js');

    app.get('/resource', resource.findAll);

}
