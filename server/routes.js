const router = require('express').Router();

const controller = require('./controllers');

router.get('/', controller.products.getAll);

router.get('/:product_id', controller.products.getOne);

router.get('/:product_id/styles', controller.styles.get);

router.get('/:product_id/related', controller.related.get);

module.exports = router;
