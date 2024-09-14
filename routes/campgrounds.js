const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsynch = require('../utils/catchAsynch');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware.js');
const Campground = require('../models/campground');

router.route('/')
    .get( catchAsynch( campgrounds.index ))
    .post( isLoggedIn, validateCampground, 
        catchAsynch( campgrounds.createCampgrounds ))

router.get('/new', isLoggedIn, campgrounds.renderNewForm );

router.route('/:id')
    .get( catchAsynch( campgrounds.showCampgrounds ))
    .put( isLoggedIn, isAuthor, 
        catchAsynch( campgrounds.updateCampground ))
    .delete( isLoggedIn, isAuthor,
        catchAsynch( campgrounds.deleteCampground ))


router.get('/:id/edit', isLoggedIn, isAuthor, 
    catchAsynch( campgrounds.renderEditForm ));



module.exports = router;