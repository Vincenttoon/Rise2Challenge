const User = require('./user');
const User_workout = require('./user-workout');
const Workout = require('./workout');
const Workout_exercise = require('./workout_exercise');
const Exercise = require('./exercise.js');

// ******** Associations *********//
User.belongsToMany(Workout, {
	through: User_workout,
	foreignKey: 'user_id',
});

Workout.belongsToMany(User, {
	through: User_workout,
	foreignKey: 'workout_id',
});

Workout.belongsToMany(Exercise, {
	through: Workout_exercise,
	foreignKey: 'workout_id',
});


Exercise.belongsToMany(Workout, {
	through: Workout_exercise,
	foreignKey: 'exercise_id',
});



module.exports = { User, User_workout, Workout, Exercise, Workout_exercise };