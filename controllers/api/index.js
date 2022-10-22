const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const profileRoutes = require('./profile-routes')

router.use('/users', userRoutes);

router.use('/profile', profileRoutes);

module.exports = router;