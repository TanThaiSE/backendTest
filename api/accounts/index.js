const express = require('express');
const router = express.Router();
const passport = require('../../modules/passport')
const accountController = require('./accountController')

/* GET classes listing. */
router.get('/', accountController.list);

/* POST create account. */
router.post('/', accountController.create);
router.post('/registeradmin', accountController.createAdmin);

/* GET user infor. */

router.post('/role/:id', accountController.getRole);

/* POST update user info. */
router.post('/update', accountController.update);
  
router.post('/update/:id', accountController.updateFromPhuoc);

router.get('/lock/:id', accountController.lockAccount);
router.get('/remove/:id', accountController.remove);
router.get('/admin', accountController.adminAccount);
router.get('/user', accountController.userAccount);
router.get('/detail/:id', accountController.getInfo);

router.post('/mapping', accountController.mappingStudentID);
module.exports = router;