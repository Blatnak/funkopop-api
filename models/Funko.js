const mongoose = require('mongoose');

const FunkoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Funko name is required"]
        },
        sku: {
            type: String,
            required: true
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
        },
        exclusiveStore: {
            type: String
        }
    }
);

const Funko = mongoose.model("funko", FunkoSchema)

module.exports = Funko