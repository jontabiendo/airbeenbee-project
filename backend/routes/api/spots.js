const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review } = require('../../db/models');

const router = express.Router();

router.get('/:spotId', async (req, res, next) => {
    const spotId = req.params.spotId;
    
    const spot = await Spot.findByPk(spotId);

    if(!spot) {
        res.status = 404;
        res.json({message: "Spot couldn't be found"})
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
})

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
