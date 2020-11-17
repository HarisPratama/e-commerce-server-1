const router = require('express').Router();
const CartController = require('../controllers/cartController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/', CartController.getCart);
router.post('/', CartController.addCart);
router.patch('/:id', CartController.cartCheckout);

module.exports = router;