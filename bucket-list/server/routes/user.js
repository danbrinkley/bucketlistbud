const router = require("express").Router();
const userController = require("../controllers/user");

router.get('/', isLoggedIn, userController.index);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
module.exports = router;
