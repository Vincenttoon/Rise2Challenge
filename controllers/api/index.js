const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes')
const exerciseRoutes = require('./exercise-routes');
const workoutRoutes = require('./workout-routes');
const homeRoutes = require('./home-routes');


router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/workout', workoutRoutes);
router.use('/home', homeRoutes);
router.use('/exercise', exerciseRoutes);



module.exports = router ;