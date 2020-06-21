const router = require('express').Router();
let Athlete = require('../models/athlete.model');
router.route('/').get((req, res) => {
    Athlete.find()
    .then(athletes => res.json(athletes))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const sport = req.body.sport;
  const nationality = req.body.nationality;
  const DOB = Date.parse(req.body.DOB);
  const gender=req.body.gender;
  const description=req.body.description;
  const location=req.body.location;
  const team = req.body.team;
  const insta= req.body.insta;
  const facebook=req.body.facebook;
  const extra=req.body.extra;
  const newAthlete = new Athlete({
    name,
    sport,
    nationality,
    DOB,
    gender,
    description,
    location,
    team,
    insta,
    facebook,
    extra
  });
  newAthlete.save()
  .then(() => res.json('Athlete added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Athlete.findById(req.params.id)
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').put((req, res) => {
    Athlete.findById(req.params.id)
    .then(athlete => {
      athlete.name = req.body.name;
      athlete.sport = req.body.sport;
      athlete.DOB = Date.parse(req.body.DOB);
      athlete.nationality = req.body.nationality;
      athlete.gender = req.body.gender;
      athlete.description = req.body.description;
      athlete.location = req.body.location;
      athlete.team = req.body.team;
      athlete.insta = req.body.insta;
      athlete.facebook = req.body.facebook;
      athlete.extra = req.body.extra;
      athlete.save()
        .then(() => res.json('athlete updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;