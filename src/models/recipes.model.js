
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const RecipesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    ingredients: [{
        _id: false,
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
        quantity: { type: String },
    }],
}, {
    timestamps: true,
});

RecipesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Recipes', RecipesSchema);
