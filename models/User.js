const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please introduce a valid username between 3 and 20 characters"],
            minLength: 3,
            maxLength: 20,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please intoduce a valid password between 3 and 20 characters"],
            minLength: 8,
            maxLength: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minLength: 5
        },

        firstName: {
            type: String,
            required: true,
            minLength: 3
        },
        lastName: {
            type: String,
            required: true
        },
        checkedUpc: {

        }
    },
    {timestamps: true}
);

UserSchema.plugin(uniqueValidator, {message: 'already exists.'});

const User = mongoose.model("user", UserSchema);

module.exports = User;

