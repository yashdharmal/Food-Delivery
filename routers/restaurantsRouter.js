const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController')
const authMiddleware = require("../middleware/middleware");

router.post('/searchRestaurant', authMiddleware.authMiddleware, restaurantController.searchRestaurant);





module.exports = router;