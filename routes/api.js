const express = require("express");
const Post = require("../models/post");
const Comment = require("../models/comment");
const router = express.Router();

// GET all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new post
router.post("/posts", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    date: Date.now(),
    published: req.body.published,
    comments: [],
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a specific post
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new comment
router.post("/posts/:id/comments", async (req, res) => {
  try {
    const newComment = new Comment({
      post: req.params.id,
      content: req.body.content,
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
    });

    const savedComment = await newComment.save();
    const post = await Post.findById(req.params.id);
    post.comments.push(savedComment);
    await post.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all comments for a specific post
router.get("/posts/:id/comments", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("comments");
    res.json(post.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
