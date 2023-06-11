const express = require('express');
const{ Op } = require('sequelize')
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking, Spot, SpotImage } = require('../../db/models');

const router = express.Router();

const validateBooking = [
    check('startDate')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a startDate'),
    check('startDate')
        .isDate()
        .withMessage('Please provide a valid date'),
    check('endDate')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide an endDate'),
    check('endDate')
        .isDate()
        .withMessage('Please provide a valid date'),
    handleValidationErrors
]

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
});

router.delete('/:bookingId', requireAuth, async(req, res, next) => {
    const targetBooking = await Booking.findByPk(req.params.bookingId);

    if(!targetBooking) {
        res.statusCode = 404;
        return res.json({
            message: "Booking couldn't be found"
        });
    };

    if (targetBooking.userId !== req.user.id) {
        res.statusCode = 401;
        return res.json({
            message: "You are not authorized to delete this booking"
        });
    };

    if(targetBooking.startDate.valueOf() <= Date.now()) {
        res.statusCode = 403;
        return res.json({
            message: "Bookings that have been started can't be deleted"
        });
    };

    targetBooking.destroy();

    res.json({
        message: "Successfully deleted" 
    });
})

router.put('/:bookingId', [requireAuth, validateBooking], async (req, res, next) => {
    let { startDate, endDate } = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    
    
    const targetBooking = await Booking.findByPk(req.params.bookingId);

    if(!targetBooking) {
        res.statusCode = 404;
        return res.json({
            message: "Booking couldn't be found"
        });
    };

    if(targetBooking.userId !== req.user.id) {
        return res.json({
            message: "You are not authorized to make changes to this "
        });
    };
    
    if(targetBooking.endDate.valueOf() <= Date.now()) {
        res.statusCode = 403;
        return res.json({
            message: "Past bookings can't be modified"
        });
    };

    const bookings = await Booking.findAll({
        where: {
            spotId: targetBooking.spotId,
            id: {
                [Op.ne]: req.params.bookingId
            }
        }
    });

    const bookingList = [];
    bookings.forEach(booking => {
        bookingList.push(booking.toJSON())
    });

    if(bookingList.length) {
        bookingList.forEach(booking => {
            const errors = {};

            if(startDate.valueOf() >= booking.startDate.valueOf() && startDate.valueOf() <= booking.endDate.valueOf()) {
                errors.startDate = "Start date conflicts with an existing booking"
            };

            if(endDate.valueOf() >= booking.startDate.valueOf() && endDate.valueOf() <= booking.endDate.valueOf()) {
                errors.endDate = "End date conflicts with an existing booking"
            };

            if(Object.values(errors).length) {
                res.statusCode = 403
                return res.json({
                    message: "Sorry, this spot is already booked for the specified dates",
                    errors
                });
            }
        });
    };

    targetBooking.update({
        startDate,
        endDate
    })
    
    res.json(targetBooking);
})

module.exports = router
