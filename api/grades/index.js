const express = require('express');
const router = express.Router();
const gradeController = require('./gradesController');

router.get('/:idclass', gradeController.getListGrade);

router.get('/members/:idclass', gradeController.getMembers);
router.get('/membersHaveAccount/:idclass', gradeController.getMembersHaveAccount);
router.get('/onemember/:studentid', gradeController.getOneMember);
router.get('/get-one-grade/:idAssign/:studentID', gradeController.getGrade);

router.get('/:idClass/:idAssign', gradeController.getAssignmentGrades)
router.post('/update/:idClass/:idAssign', gradeController.updateGrade);

router.post('/uploadGrades/:idClass/:idAssign', gradeController.uploadGrades);

module.exports = router;