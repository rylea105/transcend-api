module.exports = (app) => {
    const pricing = require('../controllers/pricing.controller.js');

    app.get('/getallprice',pricing.findAll);
    app.post('/getoneprice',pricing.findOneItem);
}
