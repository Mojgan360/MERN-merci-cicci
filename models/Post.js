const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { objectId } = mongoose.Schema.Types;

const PostSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "no photo",
  },
  postedBy: {
    user: {
      type: Schema.Types.ObjectId,
    },
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});
module.exports = mongoose.model("post", PostSchema);
