// const mongoose = require('mongoose');
//
// const Schema = mongoose.Schema;
//
//
// const videoSchema = new Schema(
//   // 1st arg -> fields of the documents of this collection
//   {
//     // All videos
//     name:  { type: String },
//     email: { type: String },
//     role: {
//       type: String,
//       enum: [ 'normal video', 'admin' ],
//       default: 'admin'
//     },
//     profileImg: { type: String },
//
//     // Traditional registration videos
//     videoName: { type: String },
//     encryptedPassword: { type: String },
//
//     // Login with Facebook videos
//     facebookID: { type: String },
//
//     // Login with Google videos
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
// const Video = mongoose.model('Video', videoSchema);
//
//
// module.exports = Video;
