const router = require('express').Router();
const { User, Exercise, Catalog } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Workout.findAll({
      attributes: ['id', 'exercise_list', 'user_id', 'date_created'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbWData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });