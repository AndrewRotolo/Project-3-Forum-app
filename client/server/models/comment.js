const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: string,
    required: true,
    trim: true,
  },
  date: {
    type: date,
    default: date.now,
  }
});

const comment = model('post', commentSchema);
