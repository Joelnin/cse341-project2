const express = require('express');
const router = express.Router();

const controller = require('../controllers/generalController');

const validateRequest = require('../middleware/validateRequest');
const heroeRules = require('../validators/heroes');
const authenticate  = require('../middleware/authenticate')


const collection = "heroes";

// Get All
router.get('/', controller.getAll(collection));

// Get just one
router.get('/:id', controller.getSingle(collection));

// Create a new one
// router.post('/', heroesController.createHeroe);
router.post('/', authenticate.isAuthenticated, heroeRules, validateRequest, controller.createInstance(collection));
// router.post('/', isAuthenticated, controller.createInstance(collection));

// Change values from a existing one
// router.put('/:id', heroesController.updateHeroe);
router.put('/:id', authenticate.isAuthenticated, heroeRules, validateRequest, controller.updateInstance(collection));
// router.put('/:id', isAuthenticated, controller.updateInstance(collection));

// Delete one
// router.delete('/:id', controller.deleteInstance(collection));
router.delete('/:id', authenticate.isAuthenticated, controller.deleteInstance(collection));


// Export the route
module.exports = router;