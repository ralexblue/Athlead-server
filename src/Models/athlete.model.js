const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  name: { type: String, required: true },
  sport:{type:Array ,required:true},
  DOB: { type:Date},
  nationality: { type: String, required: true },
  gender:{ type: String, required: true },
  description : {type:String},
  location : {type:String},
  team: {type:String},
  insta:{type:String},
  facebook : {type:String},
  extra: {type:String},
}, {
  timestamps: true,
});

// const aboutSchema = Schema({
//     athlete: { type: Schema.Types.ObjectId, ref: 'athlete' },
// description : {type:String},
//   location : {type:String},
//   team: {type:String},
// });
// const SocialMSchema = Schema({
//     athlete: { type: Schema.Types.ObjectId, ref: 'athlete' },
    // insta:{type:String},
//       facebook : {type:String},
// extra: {type:String},
// });

const Athlete = mongoose.model('athlete', athleteSchema);
// const About = mongoose.model('about', aboutSchema);
// const SocialM=mongoose.model('SocialM', aboutSchema);

module.exports = Athlete;