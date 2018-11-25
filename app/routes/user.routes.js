module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.post('/signIn', user.signIn);
    app.post('/signUp', user.signUp)
}
