const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');

const validateRequest = require('../middleware/validateRequest');
const regionRules = require('../validators/regions');
const authenticate  = require('../middleware/authenticate')

const collection = "regions";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', regionsController.createRegion);
router.post('/', authenticate.isAuthenticated, regionRules, validateRequest, controller.createInstance(collection));
// router.post('/', isAuthenticated, controller.createInstance(collection));


// Change values from a existing one
// router.put('/:id', regionsController.updateRegion);
router.put('/:id', authenticate.isAuthenticated,regionRules, validateRequest, controller.updateInstance(collection));
// router.put('/:id', isAuthenticated, controller.updateInstance(collection));


// Delete one
// router.delete('/:id', controller.deleteInstance(collection));
router.delete('/:id', authenticate.isAuthenticated, controller.deleteInstance(collection));


// Export the route
module.exports = router;