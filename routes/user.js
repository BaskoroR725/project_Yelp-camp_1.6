const express = require('express');
const router = express.Router();
const { storeReturnTo } = require('../middleware');
const passport = require('passport');
const catchAsynch = require('../utils/catchAsynch');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get( users.renderRegister )
    .post( catchAsynch( users.register ))

router.route('/login')
    .get( users.renderLogin )
    .post( storeReturnTo, 
        passport.authenticate('local', 
            {failureFlash:true, failureRedirect: '/login'}), 
            users.login)

router.get('/logout', users.logout); 

module.exports = router;