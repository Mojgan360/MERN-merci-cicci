const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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
  postedby: {
    user: {
      type: Schema.Types.ObjectId,
    },
  },

  name: {
    type: String,
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
