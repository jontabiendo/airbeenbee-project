const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage } = require('../../db/models');
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
    handleValidationErrors
]

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

    if(stars < 1 || stars > 5) {
        const errors = {};

        const err = Error('Bad request.');
        err.erros = errors;
        err.status = 400;
        err.title = 'Bad request';
        err.message = "Rating must be an integer from 1 to 5";
        next(err);
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



module.exports = router;
