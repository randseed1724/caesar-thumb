const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const dotenv       = require('dotenv');
const config       = require('config');
const flash        = require('connect-flash');
//

// Load our ENVIRONMENT VARIABLES from the .env file in dev
// (this is for dev only, but in prod it just doesn't do anything)
require('dotenv').config();
dotenv.load();


// Tell node to run the code contained in this file
// (this sets up passport and our strategies)
require('./config/passport-config.js');


mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Caesar Thump!';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(layouts);
app.use( session({
  secret: 'Silence is  golden',

  // these two options are there to prevent warnings in terminal
  resave: true,
  saveUninitialized: true
}) );
app.use(flash());

// These need to come AFTER the session middleware
app.use(passport.initialize());
app.use(passport.session());
// ... and BEFORE our routes

// This middleware sets the user variable for all views
// (only if logged in)
//   user: req.user     for all renders!
app.use((req, res, next) => {
  if (req.user) {
    // Creates a variable "user" for views
    res.locals.user = req.user;
  }

  next();
});



//ROUTES  <<<< -------------------------------------------------
//^^^^^^  -------------------------------------------------
const index = require('./routes/index');
app.use('/', index);

const auth = require('./routes/auth');
app.use('/', auth);

const userIn = require('./routes/user');
app.use('/', userIn);

const myAuthRoutes = require('./routes/auth');
app.use('/', myAuthRoutes);

const contest = require('./routes/contest');
app.use('/', contest);

// const video = require('./routes/contest-category/video');
// app.use('/', video);
//
// const photo = require('./routes/contest-category/photo');
// app.use('/', photo);
//
// const music = require('./routes/contest-category/music');
// app.use('/', music);
//
// const other = require('./routes/contest-category/other');
// app.use('/', other);
//
// const myUserRoutes = require('./routes/user/user-routes.js');
// app.use('/', myUserRoutes);
//
// const myRoomRoutes = require('./routes/room-routes.js');
// app.use('/', myRoomRoutes);


// ----------------------------------------------------------



// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
