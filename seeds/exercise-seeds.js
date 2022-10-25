const { Exercise } = require('../models');

const exerciseData = [
    {
        ex_name: 'Deadlift',
        intensity: 'High',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Squats',
        intensity: 'High',
        ex_type: 'Lower Body'
    },
    {
        ex_name: 'Jogging',
        intensity: 'Medium',
        ex_type: 'Cardio'
    }
];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;