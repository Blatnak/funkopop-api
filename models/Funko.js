const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const FunkoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Funko name is required"]
        },
        upc: {
            type: Number,
            required: true,
            length: 12,
            unique: true
        },
        handle: {
            type: String,
            required: true,
            lowercase: true
        },
        imageLink: {
          type: String,
          required: true   
        },
        number: {
            type: Number,
            required: [true, "Funko number is required"]
        },
        fandom: {
            type: String
        },
        category: {
            type: String
        },
        releaseDate: {
            type: Date,
            required: [true, "Funko relase date is required in AAAA/MM/DD"]
        },
        isExclusive: {
            type: Boolean,
            required: true
        },
        exclusiveStore: {
            type: String
        }
    }
);

FunkoSchema.plugin(uniqueValidator, {message: 'already exists.'});

const Funko = mongoose.model("funko", FunkoSchema)

module.exports = Funko