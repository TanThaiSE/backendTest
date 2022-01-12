const emailController = require('./emailController');
const express = require('express');
const router = express.Router();

router.post('/getVerifyCode', emailController.getVerifyCode);
router.post('/setMail', emailController.setMail);
router.post('/', emailController.sendEmail);

module.exports = router;