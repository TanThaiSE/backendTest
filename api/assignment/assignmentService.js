const assignmentModel = require('./assignmentModel');

exports.list = (classID) => assignmentModel.getAssignment(classID);

exports.getAssignById = (idAssign) => assignmentModel.getAssignById(idAssign);

exports.createAssignment = (assignObj) => assignmentModel.createAssignment(assignObj);

exports.deleteAssignment = (idAssign) => assignmentModel.deleteAssignment(idAssign);

exports.updateAssignment = (assignObj) => assignmentModel.updateAssignment(assignObj);

exports.updateRank = (listAssign) => assignmentModel.updateRank(listAssign);

exports.markFinalAssign = (idAssign) => assignmentModel.markFinal(idAssign);