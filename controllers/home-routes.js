//contain all user-facing routes, such as homepage and login page


//setting up main homepage
const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Workout, User_profile, Exercise} = require("../models");


router.get('/', (req, res) => {
    Workout.findAll({
      attributes: ['id', 'user_id', 'name'],
      include: [
        {
          model: Exercise,
          attributes: ['id', 'ex_name', 'intensity', 'ex_type']
        },
        {
          model: User,
          attributes: ['username']
        },
      ],
    })
    .then((dbWorkoutData) => {
      const workouts = dbWorkoutData.map((workout) => workout.get({ plain: true }));

      res.render('public', {
        workouts,
        loggedIn: req.session.loggedIn
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json;
    });
    // other logic...
});

router.get('/user-info', (req, res) => {

});

router.post('/user-info', (req, res) => {
  User_profile.create({
    age: req.body.age,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight
  })
  then((dbUPdata) => res.json(dbUPdata))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
});

//get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  // call signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

  module.exports = router;