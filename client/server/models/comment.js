const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
      min_length: 1,
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dayjs(timestamp).format('MM/DD/YYYY hh:mm:ss A'),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

const Comment = model('post', commentSchema);
module.exports = Comment;
