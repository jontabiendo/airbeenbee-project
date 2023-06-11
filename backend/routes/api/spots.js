const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { Op } = require('sequelize');

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
    check('description')
        .isLength({min: 30})
        .withMessage('Description needs a minimum of 30 characters'),
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

    res.json({ Spots: ownedSpots })
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

    res.statusCode = 201;
    res.json(createdSpot);
});

router.get('/', async (req, res, next) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    
    const errors = {}
    
    const pagination = {};
    if(size) {
        size = parseInt(size);
        if(!Number.isNaN(size)) {
            if(size < 1 || size > 20) {
                errors.size = "Size must be a number greater than or equal to 1"
            }
            else pagination.limit = size;
        }
        else errors.size = "Size must be an integer";
    }
    else {
        size = 20;
        pagination.limit =20
    };

    if(page) {
        page = parseInt(page);
        if(!Number.isNaN(page)){
            if(!pagination.limit) pagination.limit = 20;
            if(page < 1 || page > 10) {
                errors.page = "Page must be a number greater than or equal to 1"
            }
            else pagination.offset = (page - 1) * pagination.limit
        }
        else errors.page = "Page must be an integer"
    }
    else {
        page = 1;
        pagination.offset = 0
    };

    const minLat2 = parseFloat(minLat);
    const maxLat2 = parseFloat(maxLat);
    const minLng2 = parseFloat(minLng);
    const maxLng2 = parseFloat(maxLng);
    const minPrice2 = parseFloat(minPrice);
    const maxPrice2 = parseFloat(maxPrice);

    const where = {}
    
    if(maxLat || minLat) {
        if(!Number.isNaN(minLat2) && !Number.isNaN(maxLat2)) {
            where.lat = {
                [Op.gte]: minLat2,
                [Op.lte]: maxLat2
            }
        }else if (!Number.isNaN(minLat2)) {
            where.lat = {
                [Op.gte]: minLat2
            };
        }
        else if(!Number.isNaN(maxLat2)) {
            where.lat = {
                [Op.lte]: maxLat2
            };
        };
    };

    if(minLat && Number.isNaN(minLat2)) {
        errors.minLat = "Minimum longitude is invalid"
    };

    if(maxLat && Number.isNaN(maxLat2)) {
        errors.maxLat = "Maximum longitude is invalid"
    };

    if(minLng || maxLng) {
        if(!Number.isNaN(minLng2) && !Number.isNaN(maxLng2)) {
            where.lng = {
                [Op.gte]: minLng2,
                [Op.lte]: maxLng2
            }
        }
        else if (!Number.isNaN(minLng2)) {
            where.lng = {
                [Op.gte]: minLng2
            };
        }
        else if(!Number.isNaN(maxLng2)) {
            where.lng = {
                [Op.lte]: maxLng2
            };
        };
    };

    if(minLng && Number.isNaN(minLng2)) {
        errors.minLng = "Minimum longitude is invalid"
    };

    if(maxLng && Number.isNaN(maxLng2)) {
        errors.maxLng = "Maximum longitude is invalid"
    };

    if(minPrice || maxPrice) {
        if(!Number.isNaN(minPrice2) && !Number.isNaN(maxPrice2)) {
            where.price = {
                [Op.gte]: minPrice2,
                [Op.lte]: maxPrice2
            }
        }
        else if (!Number.isNaN(minPrice2)) {
            where.lng = {
                [Op.gte]: minPrice2
            };
        }
        else if(!Number.isNaN(maxPrice2)) {
            where.lng = {
                [Op.lte]: maxPrice2
            };
        };
    };

    if(minPrice2 < 0) {
        errors.minPrice = "Minimum price must be greater than or equal to 0"
    };

    if(maxPrice < 0) {
        errors.maxPrice = "Maximum price must be greater tha or equal to 0"
    };

    if(Object.values(errors).length) {
        res.statusCode = 400;
        return res.json({
            message: "Bad Request",
            errors
        })
    }
    const spots = await Spot.findAll({
        ...pagination,
        include: [
            {
                model: SpotImage
            },
            {
                model: Review
            }
        ],
        where
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
        else spot.avgRating = 'NA'

        delete spot.Reviews
    })

    res.json({
        "Spots": spotList,
        page,
        size
    })
});





module.exports = router;
