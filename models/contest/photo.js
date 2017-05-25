// const mongoose = require('mongoose');
//
// const Schema = mongoose.Schema;
//
//
// const photoSchema = new Schema(
//   // 1st arg -> fields of the documents of this collection
//   {
//     // All photos
//     name:  { type: String },
//     email: { type: String },
//     role: {
//       type: String,
//       enum: [ 'normal photo', 'admin' ],
//       default: 'admin'
//     },
//     profileImg: { type: String },
//
//     // Traditional registration photos
//     photoName: { type: String },
//     encryptedPassword: { type: String },
//
//     // Login with Facebook photos
//     facebookID: { type: String },
//
//     // Login with Google photos
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
// const Photo = mongoose.model('Photo', photoSchema);
//
//
// module.exports = Photo;
