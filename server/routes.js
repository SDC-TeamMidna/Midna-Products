const router = require('express').Router();

const controller = require('./controllers');


router.get('/products', controller.products.get);

module.exports = router;
