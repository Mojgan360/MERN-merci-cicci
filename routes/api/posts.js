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

// router.post(
//   "/",
//   [
//     auth,
//     [
//       check("title", "Title is required").not().isEmpty(),
//       //   check("hero", "Hero is required").not().isEmpty(),
//       //   check("photo", "You must select an image.").notEmpty(),
//     ],
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     console.log(req.body);

//     if (!errors.isEmpty()) {
//       return res.status(400).jsonp(errors.array());
//     } else {
//       res.send({ errors });
//     } //

//     try {
//       const user = await User.findById(req.user.id).select("-password");
//       const newPost = new Post({
//         title: req.body.title,
//         hero: req.body.hero,
//         user: user.id,
//         postedBy: req.user,
//       });
//       //
//       const post = await newPost.save();
//       res.json(post);
//     } catch (err) {
//       console.error(err.massage);
//       //   res.status(500).send("Server Error...");
//     }
//   }
// );

module.exports = router;
