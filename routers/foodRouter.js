const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const authMiddleware = require("../middleware/middleware");

router.post('/searchFood', authMiddleware.authMiddleware, foodController.searchFood)


module.exports = router;