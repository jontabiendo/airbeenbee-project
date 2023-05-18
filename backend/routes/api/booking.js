const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking, Spot, SpotImage } = require('../../db/models');

const router = express.Router();

router.get('/current', requireAuth, async(req, res, next) => {
    const rawBookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        include: {
            model: Spot,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'description']
            },
            include: {
                model: SpotImage
            }
        }
    });

    if(!rawBookings) {
        return res.json({
            message: "You haven't made any bookings. Make your first?"
        });
    };

    const bookings = [];
    rawBookings.forEach(booking => {
        bookings.push(booking.toJSON());
    });

    bookings.forEach(booking => {
        const preview = booking.Spot.SpotImages.find(image => image.preview === true);

        if(!preview) {
            booking.Spot.previewImage = 'No preview image found'
        }
        else booking.Spot.previewImage = preview.url;

        delete booking.Spot.SpotImages
    })

    res.json({
        Bookings: bookings
    })
})

module.exports = router
