const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');

const validateRequest = require('../middleware/validateRequest');

const heroeRules = require('../validators/heroes');

const collection = "heroes";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', heroesController.createHeroe);
router.post('/', heroeRules, validateRequest, controller.createInstance(collection));

// Change values from a existing one
// router.put('/:id', heroesController.updateHeroe);
router.put('/:id', heroeRules, validateRequest, controller.updateInstance(collection));

// Delete one
router.delete('/:id', controller.deleteInstance(collection));

// Export the route
module.exports = router;