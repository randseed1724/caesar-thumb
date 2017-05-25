const express = require('express');
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');

const Room = require('../models/contest.js');


const contest = express.Router();


contest.get('/rooms/new',
  // We need to be logged in to create rooms
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('rooms/new-room-view.ejs');
  }
);



module.exports = contest;
