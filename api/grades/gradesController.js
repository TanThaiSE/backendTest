const gradeService = require('./gradesService');
const Authorization = require('../../modules/authorization');

exports.getListGrade = async function(req, res) {
    let a = await gradeService.getListGrade(req.params.idclass);
    let b = await gradeService.getListGradeOfStudentDontHaveAccount(req.params.idclass);
    a = a.concat(b);
    res.json(a);
}

exports.getMembers = async function(req, res) {
    let a = await gradeService.getMembers(req.params.idclass);
    res.json(a);
}

exports.getMembersHaveAccount = async function(req, res) {
    let a = await gradeService.getMembersHaveAccount(req.params.idclass);
    res.json(a);
} 

exports.getOneMember = async function(req, res) {
    let a = await gradeService.getOneMember(req.params.studentid);
    res.json(a);
}

exports.getAssignmentGrades = async (req, res) => {
    const isTeacher = await Authorization.teacherAuthority(req.user.id, req.params.idClass);
    if (!isTeacher){
        res.status(404).json({message: "Authorization Secure Error!"});
    } else {
        const assignmentGrades = await gradeService.getAssignmentGrades(req.params.idAssign);

        if (assignmentGrades) {
            res.status(200).json(assignmentGrades);
        } else {
            res.status(404).json({message: 'Update rank failed!'});
        }
    }
}

exports.updateGrade = async (req, res) => {
    const isTeacher = await Authorization.teacherAuthority(req.user.id, req.params.idClass);
    if (!isTeacher){
        res.status(404).json({message: "Authorization Secure Error!"});
    } else {
        const gradeObj = {
            assignment_id: req.params.idAssign,
            student_id: req.body.student_id,
            grade: req.body.grade
        }
        const result = await gradeService.updateGrade(gradeObj);
        if (result.affectedRows === 0) {
            result = await gradeService.addGrade(gradeObj);
        }
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Update grade failed!'});
        }
    }
}

exports.uploadGrades = async (req, res) => {
    const isTeacher = await Authorization.teacherAuthority(req.user.id, req.params.idClass);
    if (!isTeacher){
        res.status(404).json({message: "Authorization Secure Error!"});
    } else {
        try {
            for (let i = 0; i < req.body.listGrades.length; i ++) {
                const gradeObj = {
                    assignment_id: req.params.idAssign,
                    student_id: req.body.listGrades[i].id,
                    grade: req.body.listGrades[i].grade
                }
    
                const result = await gradeService.updateGrade(gradeObj);
    
                if (result.affectedRows === 0) {
                    await gradeService.addGrade(gradeObj);
                }
            }
    
            res.status(200).json({message: "Grades updated!"});
        } catch {
            res.status(400).json({message: "Input has problem!"});
        }

    }
}

exports.getGrade = async function(req, res) {   
    const result = await gradeService.getGrade(req.params.studentID, req.params.idAssign);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({message: 'failed!'});
    }
}