const express = require('express');
const router = express.Router();
const notificationController = require('./notificationController');

router.get('/', notificationController.getNoti);

module.exports = router;