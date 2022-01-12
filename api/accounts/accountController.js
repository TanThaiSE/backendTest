const accountService = require('./accountService');

exports.getInfo = async function(req, res) {
    const id = req.params.id;
    const acc = await accountService.getInfoByUserId(id);

    if (acc) {
        res.status(200).json({account: acc});
    } else {
        res.status(404).json({message: 'No accounts available!'});
    }
};

exports.list = async function(req, res) {
    const accs = await accountService.list();

    if (accs) {
        res.status(200).json(accs);
    } else {
        res.status(404).json({message: 'No accounts available!'});
    }
};

exports.create = async function(req, res) {
    const newAcc = req.body;
    const result = await accountService.create(newAcc);

    if (result) {
        res.status(201).json({message: 'Account created!', id: result.insertId});
    } else {
        res.status(500).json({message: 'Error Account class!'});
    }
};

exports.update = async function(req, res) {
    const editInfo = {
        id: req.user.id,
        studentId: req.body.studentID,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    }

    const result = await accountService.checkExistedByStudentId(editInfo.studentId);

    if (result.length === 0) {
        const result2 = await accountService.updateInfo(editInfo);
        if (result2) {
            res.status(201).json({message: 'Account updated!', result: result2});
        } else {
            res.status(500).json({message: 'An Error Occur!', result: result2});
        }
    } else {
        res.status(500).json({message: 'Student ID existed!'});
    }
};

exports.updateFromPhuoc = async function(req, res) {
    const editInfo = {
        id: req.params.id,
        studentId: req.body.studentID,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    }
    const result2 = await accountService.updateInfo(editInfo);
    if (result2) {
        res.status(201).json({message: 'Account updated!', result: result2});
    } else {
        res.status(500).json({message: 'An Error Occur!', result: result2});
    }
};

exports.getRole = async (req, res) => {
    const userId = req.params.id;
    const classId = req.body.classId;

    const result = await accountService.getRole(classId, userId);

    if (result) {
        res.status(201).json(result);
    }
    else {
        res.status(500).json({message: 'Error!'});
    }
}

exports.remove = async (req,res) => {
    const accountID = req.params.id;
    const result = await accountService.remove(accountID);
    if (result) {
        res.status(201).json({message: 'Remove Success!'});
    }
    else {
        res.status(500).json({message: 'Error!'});
    }
}
exports.lockAccount = async (req, res) => {
    const accountID = req.params.id;
    const result = await accountService.lockAccount(accountID);
    res.status(201).json({message: 'Lock Success!'});
}

exports.adminAccount = async (req,res) => {
    const accs = await accountService.adminAccount();

    if (accs) {
        res.status(200).json(accs);
    } else {
        res.status(404).json({message: 'No accounts available!'});
    }
}
exports.userAccount = async (req,res) => {
    const accs = await accountService.userAccount();
    if (accs) {
        res.status(200).json(accs);
    } else {
        res.status(404).json({message: 'No accounts available!'});
    }
}
exports.createAdmin = async (req,res) => {
    const newAcc = req.body;
    const result = await accountService.createAdmin(newAcc);

    if (result) {
        res.status(201).json({message: 'Account created!', id: result.insertId});
    } else {
        res.status(500).json({message: 'Error Account class!'});
    }
}
exports.mappingStudentID = async (req,res) => {
    const accountID = req.body.accountID;
    const acc = await accountService.getInfoByUserId(accountID);

    if (acc[0].studentID) {
        const result = await accountService.unmap(accountID);
        res.status(201).json({message: 'Unmap Success!'});
    }
    else {
        const result = await accountService.mapping(req.body.accountID, req.body.studentID);
        if (result) 
            res.status(201).json({message: 'Account updated!'});
        else res.status(500).json({existed: 'Student ID existed!'});
    }
    
}