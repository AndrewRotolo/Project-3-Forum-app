import { isEmail } from 'validator';
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [ isEmail, "That's not an email!" ]
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'post',
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'comment'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

module.exports = User;


