const express = require('express');
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const app = express();


// require the Drone model here
const contestModel = require('../models/contest-model');
app.use('/', contestModel);


router.get('/contest/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {

    contestModel.find((err, contestList) => {
    if(err){
      next(err);
      return;
    }
console.log(res.render('DATA:   ','contest/review',{    data: contestList}) );
    res.render('contest/review', {
    data: contestList
  });
 });
});








router.post('/contest/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
    const newContest = new contestModel({
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



  /* GET contest page. */
  router.get('/contest',
    // We need to be logged in to see contest page
    ensure.ensureLoggedIn('/login'),

    (req, res, next) => {
      res.render('contest');
    }
  );



module.exports = router;
