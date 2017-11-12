
const express = require('express');
const Ingredients = require('../models/ingredients.model');
const errorsParser = require('../helpers/errorsParser.helper');
const requiredFields = require('../middlewares/requiredFields.middleware');

// Create API group routes
const router = express.Router();

router.route('/ingredients')
    .post(requiredFields('name'), (req, res) => {
        Ingredients.create({
            name: req.body.name,
        })
        .then(() => res.status(201).send())
        .catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
    })
    .get((req, res) => {
        Ingredients.find()
        .then(ingredients => res.json(ingredients));
    });

module.exports = { router };
