// const mongoose = require('mongoose');
//
// const Schema = mongoose.Schema;
//
//
// const musicSchema = new Schema(
//   // 1st arg -> fields of the documents of this collection
//   {
//     // All musics
//     name:  { type: String },
//     email: { type: String },
//     role: {
//       type: String,
//       enum: [ 'normal music', 'admin' ],
//       default: 'admin'
//     },
//     profileImg: { type: String },
//
//     // Traditional registration musics
//     musicName: { type: String },
//     encryptedPassword: { type: String },
//
//     // Login with Facebook musics
//     facebookID: { type: String },
//
//     // Login with Google musics
//     googleID: { type: String }
//   },
//
//   // 2nd arg -> additional options
//   {
//     // Adds createdAt & updatedAt to documents
//     timestamps: true
//   }
// );
//
// const Music = mongoose.model('Music', musicSchema);
//
//
// module.exports = Music;
