const router = require('express').Router();
const passport = require("passport");
const Trips = require('../models/Trip');
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  router.get(
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/trips",
      failureRedirect: "/",
    })
  );
  
  router.get("/auth/logout", function (req, res) {//logout user. passport created this for
    req.logout();
    res.redirect("/");
  });


  module.exports = router;
