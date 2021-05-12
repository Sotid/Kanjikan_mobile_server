const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user.model");
const Kanji = require("../models/kanji.model");

//GET /API/MYPROFILE/:USERID Shows user`s profile
router.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .populate("bookmarks")
    .then((thisUser) => {
      res.status(200).json(thisUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST /API/MYPROFILE/:USERID updates user's personal information
router.post("/:userId/edit", async (req, res, next) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  // hash the new password
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPass = await bcrypt.hash(password, salt);

  User.findByIdAndUpdate(userId, {
    username,
    email,
    password: hashPass,
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).json(err));
});

//POST /API/MYPROFILE/:KANJIID/ADD Adds a new kanji to user's bookmarks
router.post("/add/:kanjiId", function (req, res, next) {
  const { userId } = req.body;
  const { kanjiId } = req.params;
  User.findByIdAndUpdate(
    userId,
    { $addToSet: { bookmarks: kanjiId } },
    { new: true }
  )
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json(err));
});

//POST /API/MYPROFILE/:KANJIID/DELETE   Removes a bookmark from the user's array
// The kanji is NOT REMOVED from the DB
router.post("/delete/:kanjiId", function (req, res, next) {
  const { userId } = req.body;
  const { kanjiId } = req.params;

  User.findByIdAndUpdate(
    userId,
    { $pull: { bookmarks: kanjiId } },
    { new: true }
  )
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
