const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Price per day is required'),
    handleValidationErrors
];

const validateSpotEdits = [
    check('address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Price per day is required'),
    handleValidationErrors
];

const validateImg = [
    check('url')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('URL cannot be empty'),
    check('preview')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please input 'true' or 'false'"),
    check('preview')
        .isBoolean()
        .withMessage("Please input 'true' or 'false'"),
    handleValidationErrors
];

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a rating'),
    check('stars')
        .isInt({ min: 1, max: 5 })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
];

// const validateBooking = [
//     check('startDate')
//         .exists({ checlkFalsy: true })
//         .notEmpty()
//         .withMessage('Start date cannot be empty'),
//     check('startDate')
//         .isDate()
//         .withMessage('Please provide a valid start date'),
//     check('endDate')
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .withMessage('End date cannot be empty'),
//     check('endDate')
//         .isDate()
//         .withMessage('Please provide a valid end date'),
//     handleValidationErrors
// ];

router.get('/current', requireAuth, async (req, res, next) => {
    const spots = await Spot.findAll({
        where: {
            ownerId: req.user.id
        },
        include: [
            {
                model: SpotImage
            },
            {
                model: Review
            }
        ]
    });

    const ownedSpots = []
    spots.forEach(spot =>{
        ownedSpots.push(spot.toJSON());
    });

    ownedSpots.forEach(spot => {
        spot.SpotImages.forEach(spotImage => {
            if (spotImage.preview === true) {
                spot.previewImage = spotImage.url
            }
        })
        if (!spot.previewImage) {
            spot.previewImage = 'No preview image found'
        }
        delete spot.SpotImages
    });

    ownedSpots.forEach(spot => {
        if (spot.Reviews.length) {
            let count = 0;
            spot.Reviews.forEach(review => {
                count += review.stars
            })
            spot.avgRating = count/spot.Reviews.length
        }
        else spot.avgRating = 'No reviews have been submitted yet'

        delete spot.Reviews
    })

    res.json(ownedSpots)
});

router.get('/:spotId', async (req, res, next) => {
    const spotId = req.params.spotId;
    
    const spot = await Spot.findByPk(spotId);

    if(!spot) {
        res.statusCode = 404;
        return res.json({message: "Spot couldn't be found"})
    }

    const targetSpot = spot.toJSON();

    const reviews = await Review.findAll({
        where: {
            spotId: spotId
        }
    });
    
    if(reviews) {
        let count = 0
        targetSpot.numReviews = 0

        reviews.forEach(review => {
            targetSpot.numReviews ++
            count += review.stars
        });

        targetSpot.avgStarRating = count/reviews.length
    }
    else {
        targetSpot.numReviews = 'No reviews submitted',
        targetSpot.avgStarRating = 'No reviews submitted'
    };

    const spotImages = await SpotImage.findAll({
        where: {
            spotId: targetSpot.id
        }
    });
    if(!spotImages[0]){
        targetSpot.SpotImages = 'No images provided'
    }
    else {
        const imgArr = []
        spotImages.forEach(spot => {
            imgArr.push(spot.toJSON())
        });
        targetSpot.SpotImages = imgArr
    }

    const user = await User.scope('aggregate').findByPk(targetSpot.ownerId)
    targetSpot.Owner = user.toJSON()

    res.json(targetSpot)
});

router.put('/:spotId', [requireAuth, validateSpot], async (req, res, next) => {
    const spotId = req.params.spotId

    const spot = await Spot.findByPk(spotId);
    if(!spot) {
        res.statusCode = 404;
        return res.json({
        message: "Spot couldn't be found"
        })
    };
    if(spot.ownerId !== req.user.id) {
        res.statusCode = 401
        return res.json({
            message: "You do not have authorization to make changes to this spot"
        })
    };

    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    spot.update({
        address: address || spot.address,
        city: city || spot.city,
        state: state || spot.state,
        country: country || spot.country,
        lat: lat || spot.lat,
        lng: lng || spot.lng,
        name: name || spot.name,
        description: description || spot.description,
        price: price || spot.price
    });

    res.json(spot)
});

router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if(!spot) {
        res.statusCode = 404;
        return res.json({
            message: "Spot couldn't be found"
        })
    };

    if(spot.ownerId !== req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: "You are not authorized to delete this spot"
        })
    };

    await Spot.destroy({
        where: {
            id: req.params.spotId
        }
    });

    res.json({
        message: "Successfully deleted"
    });
});

router.get('/:spotId/reviews', async (req, res, next) => {
    if(!(await Spot.findByPk(req.params.spotId))) {
        res.statusCode = 404;
        return res.json({
            message: "Spot couldn't be found"
        });
    };

    const reviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'] 
            },
            {
                model: ReviewImage
            }
        ]
    });

    const revObj =  [];
    reviews.forEach(review => {
        revObj.push(review.toJSON())
    });

    res.json({ Reviews: revObj })
});

router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if(!spot) {
        res.statusCode = 404;
        return res.json({
            message: "Spot couldn't be found"
        });
    };

    if(spot.ownerId !== req.user.id) {
        const bookings = await Booking.findAll({
            where: {
                userId: req.user.id,
                spotId: req.params.spotId
            },
            attributes: ['spotId', 'startDate', 'endDate']
        });
        console.log(bookings)

        if(!bookings) {
            return res.json({
                message: "You haven't made any bookings here. Would you like to book today?"
            });
        };

        return res.json({
            Bookings: bookings
        });
    };

    if(spot.ownerId === req.user.id) {
        const bookings = await Booking.findAll({
            where: {
                spotId: req.params.spotId
            },
            include: {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            }
        });

        if(!bookings) {
            return res.json({
                message: "No bookings for this spot."
            });
        };

        return res.json({
            Bookings: bookings
        })
    }

    
    res.send('Still working on this endpoint')
})

router.post('/:spotId/bookings', [requireAuth], async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    let { startDate, endDate } = req.body;

    startDate = new Date(startDate);
    endDate = new Date(endDate)

    console.log(startDate, endDate)
    
    if(endDate.valueOf() <= startDate.valueOf()) {
        res.statusCode = 400;
        return res.json({
            message: "Bad request",
            errors: {
                endDate: "endDate cannot be on or before startDate"
            }
        });
    };

    if(!spot) {
        res.statusCode = 404;
        return res.json({
            message: "Spot couldn't be found"
        });
    };

    if(spot.ownerId === req.user.id) {
        return res.json({
            message: "Can't book at a spot you own"
        });
    };

    const spotBookings = await Booking.findAll({
        where: {
            spotId: req.params.spotId
        }
    });

    const bookingList = [];
    spotBookings.forEach(booking => {
        bookingList.push(booking.toJSON());
    });
    
    const errors = {};
    bookingList.forEach(booking => {
        if(startDate.valueOf() >= booking.startDate.valueOf() && startDate.valueOf() <= booking.endDate.valueOf()) {
            errors.startDate = "Start date conflicts with an existing booking"
        };
        if(endDate.valueOf() >= booking.startDate.valueOf() && endDate.valueOf() <= booking.endDate.valueOf()) {
            errors.endDate = "End date conflicts with an existing booking"
        };
    });
    
    if(Object.values(errors).length) {
        res.statusCode = 403
        return res.json({
            message: "Sorry, this spot is already booked for the specified dates",
            errors
        });
    };     

    const newBooking = await Booking.create({
        spotId: req.params.spotId,
        userId: req.user.id,
        startDate,
        endDate
    });

    res.json(newBooking);
})

router.post('/:spotId/reviews', [requireAuth, validateReview], async (req, res, next) => {
    const { review, stars } = req.body;
    const spotId = req.params.spotId;

    if(await Review.findOne({
        where: {
            spotId,
            userId: req.user.id
        }
    })) {
        res.statusCode = 500;
        return res.json({
            message: 'User already has a review for this spot'
        });
    };

    const spot = await Spot.findByPk(spotId);
    if(!spot) {
        res.statusCode = 404;
        return res.json({
        message: "Spot couldn't be found"
        });
    };

    const newReview = await Review.create({
        userId: req.user.id,
        spotId,
        review,
        stars
    });

    res.statusCode = 201
    res.json(newReview);
})

router.post('/:spotId/images', [requireAuth, validateImg], async (req, res, next) => {
    const { url, preview } = req.body;

    const spotId = req.params.spotId

    const spot = await Spot.findByPk(spotId);
    if(!spot) {
        res.statusCode = 404;
        return res.json({
        message: "Spot couldn't be found"
        })
    }
    if(spot.ownerId !== req.user.id) {
        res.statusCode = 401
        return res.json({
            message: "You do not have authorization to make changes to this spot"
        })
    }

    const createdImage = await SpotImage.create({
        spotId,
        url,
        preview
    });

    const resImage = await SpotImage.findByPk(createdImage.id)

    res.json(resImage)
});



router.post('/', [requireAuth, validateSpot], async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const newSpot = await Spot.create({
        ownerId: req.user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name, 
        description, 
        price
    });

    const createdSpot = await Spot.findByPk(newSpot.id);

    res.json(createdSpot);
});

router.get('/', async (req, res, next) => {
    const spots = await Spot.findAll({
        include: [
            {
                model: SpotImage
            },
            {
                model: Review
            }
        ]
    })

    const spotList = [] 
    spots.forEach(spot =>{
        spotList.push(spot.toJSON());
    });

    spotList.forEach(spot => {
        spot.SpotImages.forEach(spotImage => {
            if (spotImage.preview === true) {
                spot.previewImage = spotImage.url
            }
        })
        if (!spot.previewImage) {
            spot.previewImage = 'No preview image found'
        }
        delete spot.SpotImages
    });

    spotList.forEach(spot => {
        if (spot.Reviews.length) {
            let count = 0;
            spot.Reviews.forEach(review => {
                count += review.stars
            })
            spot.avgRating = count/spot.Reviews.length
        }
        else spot.avgRating = 'No reviews have been submitted yet'

        delete spot.Reviews
    })

    res.json({"Spots": spotList})
});





module.exports = router;
