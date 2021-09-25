//TRIPS ROUTER
const router = require("express").Router();

const tripsController = require('../controllers/trips');

router.get('/new', tripsController.newTrips);

router.get('/', isLoggedIn, tripsController.allTrips);

router.post('/',isLoggedIn, tripsController.post);

router.get('/edit/:id',isLoggedIn, tripsController.edit);

router.put('/:id', tripsController.update);

router.delete('/:id',isLoggedIn, tripsController.deleteTrip);

router.get('/:id', tripsController.showTrip)

router.get('/user/:userId', tripsController.userProfile)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
module.exports = router;

