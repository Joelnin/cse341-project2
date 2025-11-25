const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');

const authenticate  = require('../middleware/authenticate')

const validateRequest = require('../middleware/validateRequest');

const creatureRules = require('../validators/creatures');

const collection = "creatures";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', creaturesController.createCreature);
router.post('/', authenticate.isAuthenticated, creatureRules, validateRequest, controller.createInstance(collection));
// router.post('/', isAuthenticated, controller.createInstance(collection));


// Change values from a existing one
// router.put('/:id', creaturesController.updateCreature);
router.put('/:id', authenticate.isAuthenticated, creatureRules, validateRequest, controller.updateInstance(collection));
// router.put('/:id', isAuthenticated, controller.updateInstance(collection));

// Delete one
// router.delete('/:id', controller.deleteInstance(collection));
router.delete('/:id', authenticate.isAuthenticated, controller.deleteInstance(collection));


// Export the route
module.exports = router;
