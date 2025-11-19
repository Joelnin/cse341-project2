const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');


const validateRequest = require('../middleware/validateRequest');

const creatureRules = require('../validators/creatures');

const collection = "creatures";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', creaturesController.createCreature);
router.post('/', creatureRules, validateRequest, controller.createInstance(collection));


// Change values from a existing one
// router.put('/:id', creaturesController.updateCreature);
router.put('/:id', creatureRules, validateRequest, controller.updateInstance(collection));

// Delete one
router.delete('/:id', controller.deleteInstance(collection));

// Export the route
module.exports = router;
