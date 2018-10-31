module.exports = (app) => {
    const resource = require('../controllers/resource.controller.js');

    app.post('/resource', resource.findAll);
    app.post('/postResource', resource.post);

}
