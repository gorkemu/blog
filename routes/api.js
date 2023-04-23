const express = require("express");
const post = require("../models/post");
const router = express.Router();
// const { body, validationResult } = require("express-validator");

router.get("/posts", async (req, res) => {
  // body("title")
  //   .isLength({ min: 1 })
  //   .trim()
  //   .withMessage("Title must be specified.")
  //   .escape();

  try {
    const posts = await post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/posts", async (req, res) => {
  const newPost = new post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
