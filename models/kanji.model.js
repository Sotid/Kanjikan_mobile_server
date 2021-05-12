const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanjiSchema = new Schema({
   kanji: {type: String, required: true},
   grade: {type:Number},
   stroke_count:{type:Number},
   meanings: [{type:String}],
   kun_readings: [{type:String}],
   on_readings: [{type:String}],
   name_readings: [{type:String}],
   jlpt: {type:Number},
   unicode: {type:String},
   heisig_en:{type:String},
});


const Kanji = mongoose.model('Kanji', kanjiSchema);

module.exports = Kanji;
