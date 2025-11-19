const { body } = require('express-validator');

const regionRules = [

  body('name')
    .notEmpty()
    .isString()
    .withMessage('A valid name for the region needs to be provided')
    .escape(),
  
  body('type')
    .notEmpty()
    .isString()
    .withMessage('The type of region needs to be provided')
    .escape(),
  
  body('climate')
    .notEmpty()
    .isString()
    .withMessage('The climate needs to be provided')
    .escape(),
  
  body('description')
    .notEmpty()
    .isString()
    .withMessage('A meaningful description needs to be provided')
    .escape()
];

module.exports = regionRules;
