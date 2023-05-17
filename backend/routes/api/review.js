const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');

const router = express.Router();

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
