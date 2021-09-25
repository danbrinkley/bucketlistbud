require("dotenv").config();
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express(); // create express app

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 5000;

/* ====  Middleware  ==== */

//Cors
app.use(cors());
app.use(morgan('dev'))
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());
//custom logger to show the url and req.body if one exists
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'BUCKETlistBUDDY',
    resave: false,
    saveUninitialized: false,  
    
  }));

//Method Overide
app.use(
    methodOverride(function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
      }
    })
  )

//use passport  
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
  res.send("THIS IS NOT AN API ROUTE");
});

//pass user globally
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(PORT, () => {
    console.log(`reporting live from localhost://${PORT}`)
})