const express = require('express');
const router = express.Router();
const reviewController = require('./reviewController');

router.get('/getReviews/:idClass', reviewController.getReviews);
router.get('/for-student/:idClass', reviewController.getListReviewsForStudent);
router.get('/detail/:idReview', reviewController.getReviewDetail);
router.get('/comments/:reviewId', reviewController.getCmts);

router.post('/update/:idClass/:idReview', reviewController.updateGrade);
router.post('/create', reviewController.createReview);
router.post('/addCmt', reviewController.createCmt);
router.post('/markFinal/:idClass', reviewController.finalReview);

module.exports = router;