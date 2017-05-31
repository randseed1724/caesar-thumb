const express = require('express');
const router = express.Router();
const app = express();
const contestModel = require('../models/contest-model');
app.use('/', contestModel);


//middleware
const ensure = require('connect-ensure-login');
const multer = require('multer');
const myUploader = multer({dest: 'public/images'});
const path = require('path');




/* GET contest page. */
router.get('/contest',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
    res.render('contest/index');
  }
);


router.get('/contest/:id/',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {

    contestModel.find((err, contestList) => {
    if(err){
      next(err);
      return;
    }
    res.render('review', {
    data: contestList
  });
 });
});

router.get('/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {

    contestModel.find({}, (err, moviesArray) => {
    if (err) { return next(err); }

    res.render('review', {
      title: 'Congratulations',
    });
  });
});


router.post('/review',
  // We need to be logged in to see contest page
  ensure.ensureLoggedIn('/login'),
  myUploader.single('contestImage'),
  (req, res, next) => {
    console.log("---------------------------------");
    console.log(req.body);
    const newContest = new contestModel({
      // PART 1
          //categories
          category: (req.body.photography || req.body.video ||
          req.body.music || req.body.writing),

          //image
          contestImage: `/images/${req.file.filename}`,

      // PART 2
          name: req.body.contestName,
          caesarThump: req.body.contestThump,
          aboutYou: req.body.aboutYou,
          description: req.body.contestDescription,
          //type of award
          typeAward: req.body.typeAward,
      // PART 3
          describeAward: req.body.describeAward,
          providingAward: req.body.providingAward,
          //number of winners
          totalWinners: req.body.manyWinners,
    });
    console.log('O.O.O.O.BMVOISDOIFSOIO',newContest);
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
