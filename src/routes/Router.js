const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { check } = require('express-validator')
const { addUserForm, addUser, viewUserDetails ,viewAllUsers} =require('../controllers/usersRoutes.js') ;
const router = express.Router();


router.get('/', addUserForm);

router.post('/add',urlencodedParser,[
    check('firstName', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail(),
    check('phone', 'Phone Number is not valid')
        .isNumeric()
        .isLength(10),
], addUser);

router.get('/viewuser/:id', viewUserDetails);

router.get('/viewusers', viewAllUsers);

module.exports = router;