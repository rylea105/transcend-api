module.exports = (app) => {
    const software = require('../controllers/software.controller.js');

    app.get('/software', software.findAll);

}
