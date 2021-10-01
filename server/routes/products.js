const Router = require('express-promise-router');

const controller = require('../controllers/index');

const router = new Router();

router.get('/products', controller.products.get);

module.exports = router;
