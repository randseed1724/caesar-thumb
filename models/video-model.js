const mongoose = require('mongoose');

// const User = require('./user-model.js');

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    photoAddress: { type: String },
    category: { type: String,
      categories: [ 'normal user', 'admin' ],
      default: 'admin'
    },


    // reference the ID of the user
    owner: { type: Schema.Types.ObjectId }

    // user as a subdocument
    // owner: { type: User.schema }
  },
  {
    timestamps: true
  }
);

const Room = mongoose.model('Room', roomSchema);


module.exports = Room;
