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
//Makes express a variable that can be used
const app = express();


//Mongodb and mongoose connection
require('./config/database');
require("./config/passport");
require('body-parser');

//Sets views to ejs


const PORT = 4000;

app.set('view engine', 'ejs');
//Routes
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const tripsRouter = require('./routes/trips');

app.use(express.static('public'))
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

//pass user globally
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})
// //Server uses indexRouter at url of /
app.use('/', indexRouter);

// //Server uses tripsRouter at url of /trips
app.use('/trips', tripsRouter);
// app.use('/user', userRouter);
//Server listen at localhost://port
app.use("/", authRouter);

app.listen(PORT, () => {
    console.log(`reporting live from localhost://${PORT}`)
})
