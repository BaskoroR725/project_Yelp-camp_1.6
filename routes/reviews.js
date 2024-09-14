const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const ExpressError = require('../utils/expressError');
const catchAsynch = require('../utils/catchAsynch');


router.post('/', isLoggedIn, validateReview, 
    catchAsynch( reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, 
    catchAsynch( reviews.deleteReview ))

module.exports = router;
