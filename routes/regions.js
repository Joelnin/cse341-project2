const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');

const validateRequest = require('../middleware/validateRequest');

const regionRules = require('../validators/regions');

const collection = "regions";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', regionsController.createRegion);
router.post('/', regionRules, validateRequest, controller.createInstance(collection));


// Change values from a existing one
// router.put('/:id', regionsController.updateRegion);
router.put('/:id', regionRules, validateRequest, controller.updateInstance(collection));


// Delete one
router.delete('/:id', controller.deleteInstance(collection));

// Export the route
module.exports = router;