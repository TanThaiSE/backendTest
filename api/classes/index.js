const express = require('express');
const router = express.Router();

const classController = require('./classController')

/* GET classes listing. */
router.get('/', classController.list);

/* POST create class. */
router.post('/', classController.create);
router.post('/acceptInviteCode',classController.acceptInviteCode);

/* GET detail class. */
router.get('/detail/:id', classController.detail);
router.get('/invitelink/:id', classController.inviteLink);

router.get('/members/:id', classController.getMember);
router.post('/uploadListStudent/:idClass', classController.addListStudent);

router.get('/acceptlink/:tokenlink/:tokenid',classController.acceptlink);

router.get('/admin', classController.listOfAdmin);
module.exports = router;