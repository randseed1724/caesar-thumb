const express      = require('express');
const router  = express.Router();
const contestModel = require('../models/contest-model');



router.get('/', (req, res, next) => {

  // Render a completely different view for logged in users
  // if (req.user) {
  //   res.render('logged-in-home.ejs');
  // } else {
  //   res.render('index');
  // }

  //   res.render('index', {});
  // });

      contestModel.find({}, (err, contestArray) => {
        if (err) { return next(err); }

    res.render('index', {
      contest: contestArray
      //                          |
  // }); //        default success message key from Passport
  });
  });
});


module.exports = router;
