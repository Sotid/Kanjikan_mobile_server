const express = require("express");
const router = express.Router();
const axios = require ("axios")

 router.get("/news", async (req, res) => {
    try {
        let response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=jp&apiKey=cee726d1eb8c4517a7d4597d6c731727"
        );
        if (response) {
          const { data } = response;
         res.json(data)
        }
      } catch (err) {
          next(err)    
  }
    
  });


module.exports = router;
