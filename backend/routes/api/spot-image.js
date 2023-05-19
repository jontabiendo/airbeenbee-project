const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const spotImage = await SpotImage.findByPk(req.params.imageId, {
        include: {
            model: Spot
        }
    });

    if(!spotImage) {
        res.statusCode = 404;
        return res.json({
            message: "Spot Image couldn't be found"
        });
    };

    if (spotImage.Spot.ownerId !== req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: "You are not authorized to delete this image"
        });
    };

    spotImage.destroy()

    res.json({
        message: "Successfully deleted"
    });
})

module.exports = router
