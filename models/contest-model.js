const mongoose = require('mongoose');

const User = require('./user.js');



const Schema = mongoose.Schema;

const contestSchema = new Schema(
  {
    category: { type: String,
      categories: [ 'photography', 'videos', 'music', 'writing' ],
      default: 'no-category'
    },
    contestImage: { type: String },
    name: { type: String },
    awardType: { type: String },
    caesarThump: { type: String },
    aboutYou: { type: String },
    contestDescription: { type: String },
    awardDescription: { type: String },
    totalWinners: { type: Number },
    providingAward: { type: String },

    // reference the ID of the user
    // owner: { type: Schema.Types.ObjectId }
    creator: { type: Schema.Types.ObjectId }
    // user as a subdocument
    // owner: { type: User.schema }
  },
  {
    timestamps: true
  }
);

const Contest = mongoose.model('Contest', contestSchema);


module.exports = Contest;
