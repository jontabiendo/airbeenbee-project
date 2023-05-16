const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = {}
    
    const spots = await Spot.findAll()

    spots.forEach(spot => async () =>{
        spot.previewImage = await SpotImage.findOne({
            where: {
                spotId: spot.id
            },
            attributes: ['url']            
        })
    })

    res.json({"Spots": spots})
})

module.exports = router;
