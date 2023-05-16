const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Review } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = {}
    
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
})

module.exports = router;
