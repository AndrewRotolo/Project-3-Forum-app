const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const post = model('post', postSchema);

module.exports = post;