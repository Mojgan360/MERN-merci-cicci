const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/User");
// @route       POST api/post
// @desc        Create a Post
// @access      private

router.post(
  "/",
  [
    auth,
    [
      check("title", "The title can't be empty.").not().isEmpty(),
      check("body", "body is required").not().isEmpty(),
      check("photo", "You must select an image.").notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).jsonp(errors.array());
    } else {
      res.send({});
    } //

    const user = await User.findById(req.user.id).select("-password");
  }
);

module.exports = router;
