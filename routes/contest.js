const express = require('express');
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const contest = express.Router();

const Contest = require('../models/contest-model');
app.use('/', Contest);
/* GET contest page. */

contest.get('/contest',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('contest');
  }
);

contest.get('/contest/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('contest/review');
  }
);

contest.post('/contest/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
    const newContest = new Contest({
      // PART 1
          //categories
          catPhoto: req.body.photography,
          catVideo: req.body.video,
          catMusic: req.body.music,
          caseatWriting: req.body.writing,
          //image
          contestImage: req.body.contestImage,
      // PART 2
          contestName: req.body.contestName,
          thump: req.body.contestThump,
          aboutYou: req.body.aboutYou,
          description: req.body.contestDescription,
          //type of award
          typeAward: req.body.typeAward,
      // PART 3
          describeAward: req.body.describeAward,
          providingAward: req.body.providingAward,
          //number of winners
          manyWinners: req.body.manyWinners,
    });
    newContest.save((err) => {
      if(err){
        next(err);
        return;
      }
      res.redirect('/contest/review');
    });
  });



module.exports = contest;
