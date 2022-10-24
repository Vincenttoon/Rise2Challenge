const user = require('./user');
const user_profile = require('./user_profile');
const workout = require('./workout');
const exercise = require('./exercise');


//******** Associations *********//
user.hasMany(workout, {
    foreignkey: 'user_id'
});

workout.belongsTo(user, {
    foreignKey: 'user_id'
});
//Is this right?
workout.belongsToMany(user, {
    through: user_profile,
    foreignKey: 'workout_id'
});
//or this
workout.belongsTo(user_profile,{
    foreignKey: 'workout_id'
});

user.hasOne(user_profile, {
    foreignKey:'user_id'
});

user_profile.belongsTo(user, {
    foreignKey: 'user_id'
});

user_profile.hasMany(workout, {
    foreignKey: 'workout_id'
});


workout.hasMany(exercise, {
    foreignKey: 'exercise_id'
});

exercise.belongsToMany(user_profile, {
    through: workout,
    foreignKey: 'exercise_id'
});


module.exports = {user, user_profile, workout, exercise};

