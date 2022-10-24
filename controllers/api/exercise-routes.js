const router = require('express').Router();
const { User, exercise, Workout } = require('../../models');
const withAuth = require("../../utils/auth");

// get all exercise
router.get('/', (req, res) => {
    exercise.findAll({
      attributes: ['id', 'ex_name', 'intensity', 'ex_type', 'ex_img'],
    })
      .then(dbExerciseData => res.json(dbExerciseData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get one exercise

//get selected exercise list

module.exports = router;
