module.exports = (app) => {
    const pricing = require('../controllers/pricing.controller.js');

    app.get('/getallprice',pricing.findAll);
    app.put('/getoneprice',pricing.findOneItem);
}
