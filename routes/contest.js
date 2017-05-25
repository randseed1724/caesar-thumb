const express = require('express');
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const Contest = require('../models/contest-model');
const contest = express.Router();


/* GET contest page. */

contest.get('/contest',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('contest');
  }
);


module.exports = contest;
