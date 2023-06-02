const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const spotsRouter = require('./spots');
const reviewsRouter = require('./review');
const bookingsRouter = require('./booking');
const spotImageRouter = require('./spot-image');
const reviewImageRouter = require('./review-image');

const { restoreUser } = require('../../utils/auth');

const { User } = require('../../db/models');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

router.use('/reviews', reviewsRouter);

router.use('/bookings', bookingsRouter);

router.use('/spot-images', spotImageRouter);

router.use('/review-images', reviewImageRouter);

module.exports = router;
