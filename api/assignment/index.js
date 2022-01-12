const express = require('express');
const router = express.Router();
const assignmentController = require('./assignmentController')

router.get('/:idClass', assignmentController.list);
router.get('/delete/:idClass/:idAssign', assignmentController.deleteAssignment);
router.post('/:idClass', assignmentController.createAssignment);
router.post('/update/:idClass/:idAssign', assignmentController.updateAssignment);
router.post('/updateRank/:idClass', assignmentController.updateRank);
router.get('/markFinalAss/:idClass/:idAssign', assignmentController.markFinalAssign);
router.get('/:idClass/:idAssign', assignmentController.getAssign);

module.exports = router;  