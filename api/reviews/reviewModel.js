const db = require("../../database");

exports.getListReviews = (classID) => db.execute(
    "SELECT A.id, A.assign_id, B.topic, A.student_id, A.expect_grade, A.explanation, A.done" 
    +  ` FROM reviews as A  
    JOIN assignments as B ON A.assign_id = B.id 
    WHERE B.class_id = ${classID}`
)

exports.getListReviewsForStudent = (classID, studentID) => db.execute(
    "SELECT A.id, A.assign_id, B.topic, A.student_id, A.expect_grade, A.explanation" 
    +  ` FROM reviews as A  
    JOIN assignments as B ON A.assign_id = B.id 
    WHERE B.class_id = ${classID} and A.student_id = ${studentID}`
)

exports.getReviewDetail = (id) => db.execute(
    "SELECT A.id, A.assign_id, B.topic, A.student_id, A.current_grade, A.update_grade, A.done, A.expect_grade, A.explanation" 
    +  ` FROM reviews as A  
    JOIN assignments as B ON A.assign_id = B.id 
    WHERE A.id = ${id}`
)

exports.updateGrade = (update_grade, id) => db.execute(
    `UPDATE reviews 
    SET update_grade = '${update_grade}' 
    WHERE (id = '${id}');`
)

exports.createReview = (reviewObj) => db.execute(
    `INSERT INTO reviews (assign_id, student_id, expect_grade, explanation, current_grade) 
    VALUES ('${reviewObj.assign_id}', '${reviewObj.student_id}', '${reviewObj.expect_grade}', '${reviewObj.explanation}', '${reviewObj.current_grade}');`
)

exports.getCmts = (id_review) => db.execute(
    `SELECT a.id, a.review_id, a.account_id, a.content, b.name 
    FROM comments as a JOIN accounts as b 
    ON a.account_id = b.id 
    WHERE a.review_id = ${id_review};`
)

exports.createCmt = (cmtObj) => db.execute(
    `INSERT INTO comments (review_id, account_id, content) 
    VALUES ('${cmtObj.review_id}', '${cmtObj.account_id}', '${cmtObj.content}');`
)

exports.updateRealGrade= (gradeObj) => db.execute(
    `UPDATE grades
     SET grade ='${gradeObj.grade}'
     WHERE assignment_id = '${gradeObj.assignment_id}' and student_id = ${gradeObj.student_id}`
);

exports.markFinal = (id_review) => db.execute(
    `UPDATE reviews 
    SET done = '1' 
    WHERE (id = '${id_review}');`
)

exports.checkReviewExist = (assignId, studentID) => db.execute(
    `SELECT *
    FROM reviews 
    WHERE assign_id = '${assignId}' AND student_id = '${studentID}'`
)
