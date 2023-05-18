const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');

const router = express.Router();

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
]

router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId);

    if(!review) {
        res.statusCode = 404;
        return res.json({
            message: "Review coulnd't be found"
        });
    };

    if(review.userId !== req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: 'You are not authorized to make changes to this review'
        });
    };

    const imageCount = await ReviewImage.count({
        where: {
            reviewId: req.params.reviewId
        }
    });

    if(imageCount >= 10) {
        res.statusCode = 403;
        return res.json({
            message: "Maximum number of images for this review reached"
        });
    };
    const reviewImage = await ReviewImage.create({
        url: req.body.url,
        reviewId: req.params.reviewId
    });

    res.send(reviewImage);
});

router.put('/:reviewId', [requireAuth, validateReview], async (req, res, next) => {
    const { review, stars } = req.body;

    const targetReview = await Review.findByPk(req.params.reviewId);

    if(!targetReview) {
        res.statusCode = 404;
        return res.json({
            message: "Review couldn't be found"
        })
    };

    if(targetReview.userId != req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: "You are not authorized to edit this review"
        });
    };

    targetReview.update({
        review: review,
        stars: stars
    })

    res.json(targetReview)
});

router.delete('/:reviewId', requireAuth, async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId);

    if(!review) {
        res.statusCode = 404;
        return res.json({
            message: "Review couldn't be found"
        });
    };

    if(review.userId !== req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: "You are not authorized to delete this review"
        });
    };

    review.destroy();

    res.json({
        message: "Successfully deleted"
    });
})

router.get('/current', requireAuth, async (req, res, next) => {
    const reviews = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {
                model: ReviewImage
            },
            {
                model: Spot
            }
        ]
    });

    if(!reviews) return res.send("You haven't submitted any reviews yet");

    const user = await User.findByPk(req.user.id, {
        attributes: {
            exclude: ['username']
        }
    })

    const reviewList = [];
    reviews.forEach(review => {
        reviewList.push(review.toJSON())
    });

   
    async function getPreview(review) {
        const preview = await SpotImage.findOne({
            where: {
                spotId: review.Spot.id,
                preview: true
            }
        })
        console.log(1, preview)
        if(!preview) return 'No preview image found'
        return preview.url
    }

    for(const review of reviewList) {
        review.Spot = {
            id: review.Spot.id,
            ownerId: review.Spot.ownerId,
            address: review.Spot.address,
            city: review.Spot.city,
            state: review.Spot.state,
            country: review.Spot.country,
            lat: review.Spot.lat,
            lng: review.Spot.lng,
            name: review.Spot.name,
            price: review.Spot.price,
            previewImage: await getPreview(review)
        }
        review.User = user
    }

    res.json({Reviews: reviewList})
})

module.exports = router
