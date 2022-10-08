const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const addressController = require("../controllers/addressController");
const authMiddleware = require("../middleware/middleware");

router.post('/addAddress', authMiddleware.authMiddleware, addressController.addAddress)
router.post('/fetchAddress', authMiddleware.authMiddleware, addressController.fetchAddress)








module.exports = router;