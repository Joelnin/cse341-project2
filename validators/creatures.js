const { body } = require('express-validator');

const creatureRules = [

  body('creatureName')
    .notEmpty()
    .isString()
    .withMessage('A valid name for the creature needs to be provided')
    .escape(),
  
  body('creatureType')
    .notEmpty()
    .isString()
    .withMessage('The type of creature needs to be provided')
    .escape(),
  
  body('alignment')
    .notEmpty()
    .isString()
    .withMessage('The aligment of the creature needs to be provided')
    .trim()
    .escape(),
  
  body('hitPoints')
    .isInt({ min: 0 })
    .withMessage('The hitpoints (HP) must be a whole number greater than 0'),
  
  body('creatureSize')
    .notEmpty()
    .withMessage('The size of creature needs to be provided')
    .escape(),
  
  body('abilities')
    .isArray()
    .withMessage('The abilities must be an array'),
  
  body('abilities.*')
    .isString()
    .withMessage('A valid ability needs to be provided')
    .escape(),
  
  body('weaknesses')
    .isArray()
    .withMessage('The weaknesses must be an array'),
  
    body('weaknesses.*')
    .isString()
    .withMessage('A valid weakness needs to be provided')
    .escape(),
  
  body('region')
    .notEmpty()
    .withMessage('Region mus be provided')
    .trim()
    .escape(),
  
  body('lore')
    .notEmpty()
    .isString()
    .withMessage('A meaningful lore needs to be provided')
    .escape()
];

module.exports = creatureRules;
