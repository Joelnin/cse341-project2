const { body } = require('express-validator');

const heroeRules = [
  body('name')
    .notEmpty()
    .isString()
    .withMessage('A valid name for the hero needs to be provided')
    .escape(),
  
  body('class')
    .notEmpty()
    .isString()
    .withMessage('A class needs to be provided')
    .escape(),
  
  body('race')
    .notEmpty()
    .isString()
    .withMessage('A race needs to be provided')
    .escape(),
  
  body('origin')
    .notEmpty()
    .withMessage('The origin of the hero needs to be provided')
    .escape(),
  
  body('abilities')
    .isArray()
    .withMessage('The abilities must be an array'),
  
  body('abilities.*')
    .isString()
    .withMessage('A valid ability needs to be provided')
    .escape(),
  
  body('hiddenAbility')
    .default(null)
    .optional()
    .escape(),
  
  body('lore')
    .notEmpty()
    .isString()
    .withMessage('A meaningful lore needs to be provided')
    .escape()
];

module.exports = heroeRules;
