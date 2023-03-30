const express = require('express');

const authContoller = require('../controllers/auth.controller');

const router = express.Router();

router.get('/signup', authContoller.getSignup);

router.get('/signup', authContoller.getLogin);

module.exports = router;