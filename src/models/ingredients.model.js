
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const IngredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
}, {
    timestamps: true,
});

IngredientsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Ingredients', IngredientsSchema);
