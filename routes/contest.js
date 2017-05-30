const express = require('express');
const router = express.Router();
const app = express();


//middleware
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');

const myUploader = multer({
    dest: path.join(__dirname, '../public/post')
});

/* GET contest page. */
router.get('/contest',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('contest');
  }
);

// require the Drone model here
const contestModel = require('../models/contest-model');
app.use('/', contestModel);


router.get('/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {

    contestModel.find((err, contestList) => {
    if(err){
      next(err);
      return;
    }
    res.render('contest/review', {
    data: contestList
  });
 });
});



router.post('/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),
  myUploader.single('contestImage'),
  (req, res, next) => {
    const newContest = new contestModel({
      // PART 1
          //categories
          catPhoto: req.body.photography,
          catVideo: req.body.video,
          catMusic: req.body.music,
          caseatWriting: req.body.writing,
          //image
          contestImage: `/image/${req.file.contestImage}`,

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
      console.log('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest');
      res.redirect('/review');
    });
  });


  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });



module.exports = router;
