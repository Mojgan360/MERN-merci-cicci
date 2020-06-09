const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/User");

// @route       POST api/posts
// @desc        Create a Post
// @access      private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("body", "Body is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        user: req.user.id,
        title: req.body.title,
        body: req.body.body,
        postedby: req.user,
        name: user.name,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       GET api/posts
// @desc        Get All Post
// @access      private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route       GET api/posts
// @desc        Get  Post by posts/:post_id
// @access      private
/**/

//
// @route       GET api/posts/myposts
// @desc        Get All Post from a special user
// @access      private
router.get("/myposts", auth, async (req, res) => {
  try {
    const myposts = await Post.find({ user: req.user.id });
    console.log(myposts);
    res.json(myposts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
