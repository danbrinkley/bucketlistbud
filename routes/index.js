//INDEX ROUTE
const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

//login page
router.get('/', indexController.index);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
module.exports = router



