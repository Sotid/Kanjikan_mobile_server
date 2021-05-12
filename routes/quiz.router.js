const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz.model");

//GET /API/LESSONS/ Shows all lessons
router.get("/", function (req, res, next) {
  Quiz.find()
    .then((allQuestions) => {
      res.status(200).json(allQuestions);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;
