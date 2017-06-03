const mongoose = require('mongoose');

const User = require('./user.js');



const Schema = mongoose.Schema;

const contestSchema = new Schema({
    category: { type: String,
      categories: [ 'photography', 'videos', 'music', 'writing' ],
      default: 'photography'
    },
    contestImage: { type: String },
    name: { type: String },
    typeAward: { type: String },
    caesarThump: { type: String },
    aboutYou: { type: String },
    description: { type: String },
    describeAward: { type: String },
    totalWinners: { type: String },
    providingAward: { type: String },
    votes: { type: Number,
    default: '0'
    },
    // reference the ID of the user
    // owner: { type: Schema.Types.ObjectId }
    // creator: { type: Schema.Types.ObjectId }
    // user as a subdocument
    // owner: { type: User.schema }
  },
  {
    timestamps: true
  }
);

const Contest = mongoose.model('Contest', contestSchema);


module.exports = Contest;
