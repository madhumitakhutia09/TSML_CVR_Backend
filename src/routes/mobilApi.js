
const express = require('express');
const router = express.Router();
const userMngCntrl = require('../controllers/authentication/login');
const userValidation = require('../middleWares/validations');
// router.post('/register/user' , userValidation.addUserValidation , userMngCntrl.addUser); 
// router.get('/all/users' , userMngCntrl.getUsers); 
//****************  EXPORTING ***************/


module.exports = router;