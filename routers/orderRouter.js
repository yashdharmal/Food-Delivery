const express = require('express');
const authMiddleware = require("../middleware/middleware");
const router = express.Router();
const orderController = require("../controllers/orderController");



router.post('/order', authMiddleware.authMiddleware, orderController.orderFood);




module.exports = router;