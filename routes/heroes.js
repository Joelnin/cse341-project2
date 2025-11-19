const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroes');

// Get All
router.get('/', heroesController.getAll);

// Get just one
router.get('/:id', heroesController.getSingle);

// Create a new one
router.post('/', heroesController.createHeroe);

// Change values from a existing one
router.put('/:id', heroesController.updateHeroe);

// Delete one
router.delete('/:id', heroesController.deleteHeroe);

// Export the route
module.exports = router;