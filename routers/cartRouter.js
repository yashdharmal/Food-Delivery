const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require("../middleware/middleware");


router.post('/addToCart', authMiddleware.authMiddleware, cartController.addToCart);




module.exports = router;