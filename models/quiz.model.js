const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  questionText: { type: String },
  answerOptions: [
    { answerText: {type:String}, isCorrect: {type:Boolean} },
    { answerText: {type:String}, isCorrect: {type:Boolean} },
    { answerText: {type:String}, isCorrect: {type:Boolean} },
    { answerText: {type:String}, isCorrect: {type:Boolean} },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
