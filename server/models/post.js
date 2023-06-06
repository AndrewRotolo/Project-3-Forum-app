const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const postSchema = new Schema(
  {
  title: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dayjs(timestamp).format('MM/DD/YYYY hh:mm:ss A'),
  },
  username: {
    type: String,
    required: true,
  }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Post = model('post', postSchema);

module.exports = Post;