const { User_workout } = require('../models');

const userWorkoutData = [
	{
		user_id: 1,
		workout_id: 1,
	},
	{
		user_id: 2,
		workout_id: 2,
	},
	{
		user_id: 3,
		workout_id: 3,
	},
];

const seedUserWorkouts = () => User_workout.bulkCreate(userWorkoutData);

module.exports = seedUserWorkouts;