const router = require('express').Router();

const controller = require('./controllers');

router.get('/products', controller.products.getAll);

router.get('/products/:product_id', controller.products.getOne);

module.exports = router;
