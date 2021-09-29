//SERVER.JS

require('dotenv').config();

const express = require('express');
//Pulling in Express

//Middleware
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require("path");
const cors = require("cors");
//Makes express a variable that can be used
const app = express();

//Mongodb and mongoose connection
require('./config/database');
require("./config/passport");
require('body-parser');


const PORT = 4000;
//Routes
const routes = require("./routes");

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.json());
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
