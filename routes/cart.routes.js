const express = require('express');

const cartContoller = require('../controllers/cart.controller');

const router = express.Router();

router.post('/items', cartContoller.addCartItem);

router.get('/', cartContoller.getCart);


module.exports = router;