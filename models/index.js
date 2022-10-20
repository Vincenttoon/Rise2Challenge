const User = require('./User');
const user_dashboard = require('./user_dashboard');
const workout = require('./workout');
const catalog = require('./catalog');
const exerciseList = require('./exercise/exerciseList');
const base = require('./exercise/base');
const category = require('./exercise/category');
const muscle = require('./exercise/muscle');

//Create associations
//******** User Associations *********//
User.hasOne(catalog, {
    foreignKey: 'user_id'
});

User.hasMany(workout, {
    foreignkey: 'user_id'
});

User.hasOne(user_dashboard, {
    foreignKey:'user_id'
});

user_dashboard.belongsTo(User, {
    foreignKey: 'user_id'
});
//******** End User Associations *********//
//********  Workout & Catalog Associations *********//

catalog.hasMany(workout, {
    foreignKey: 'workout_id'
});

catalog.belongsTo(User, {
    foreignKey: 'user_id'
});

//Not Sure about this one
workout.belongsToMany(User, {
    through: catalog,
    foreignKey: 'user_id'
});

// workout.hasMany(exerciseList, {
//     foreignKey:
// })

//******** End Workout & Catalog Associations *********//
//******** Exercise Associations *********//



