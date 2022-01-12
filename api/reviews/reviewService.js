const reviewsModel = require('./reviewModel');

exports.getListReviews = (classID) => {
    return reviewsModel.getListReviews(classID);
}

exports.getListReviewsForStudent = (classID, studentID) => {
    return reviewsModel.getListReviewsForStudent(classID, studentID);
}

exports.getReviewDetail = (id) => {
    return reviewsModel.getReviewDetail(id);
}

exports.updateGrade = (update_grade, id) => {
    return reviewsModel.updateGrade(update_grade, id);
}

exports.createReview = (reviewObj) => {
    return reviewsModel.createReview(reviewObj);
}

exports.getCmts = (review_id) => {
    return reviewsModel.getCmts(review_id);
}

exports.createCmt = (cmtObj) => {
    return reviewsModel.createCmt(cmtObj);
}

exports.updateRealGrade = (gradeObj) => reviewsModel.updateRealGrade(gradeObj);

exports.markFinal = (id_review) => reviewsModel.markFinal(id_review);

exports.checkReviewExist = (assignId, studentID) => reviewsModel.checkReviewExist(assignId, studentID);
