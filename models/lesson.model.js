const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: { type: String },
  img: { type: String },
  kanji: [
    { kanji: { type: String, required: true } ,
    grade: { type: Number },
    stroke_count: { type: Number } ,
     meanings: { type: String } ,
     kun_readings: { type: String } ,
     on_readings: { type: String } ,
     name_readings: { type: String } ,
     heisig_en: { type: String } ,
    }],
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
