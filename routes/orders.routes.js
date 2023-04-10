const express = require('express');

const ordersContoller = require('../controllers/orders.controller');

const router = express.Router();

router.post('/', ordersContoller.addOrder);


module.exports = router;