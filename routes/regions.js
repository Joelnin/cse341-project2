const express = require('express');
const router = express.Router();

const regionsController = require('../controllers/regions');

// Get All
router.get('/', regionsController.getAll);

// Get just one
router.get('/:id', regionsController.getSingle);

// Create a new one
router.post('/', regionsController.createRegion);

// Change values from a existing one
router.put('/:id', regionsController.updateRegion);

// Delete one
router.delete('/:id', regionsController.deleteRegion);

// Export the route
module.exports = router;