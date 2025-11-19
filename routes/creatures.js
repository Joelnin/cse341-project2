const express = require('express');
const router = express.Router();

const creaturesController = require('../controllers/creatures');

// Get All
router.get('/', creaturesController.getAll);

// Get just one
router.get('/:id', creaturesController.getSingle);

// Create a new one
router.post('/', creaturesController.createCreature);

// Change values from a existing one
router.put('/:id', creaturesController.updateCreature);

// Delete one
router.delete('/:id', creaturesController.deleteCreature);

// Export the route
module.exports = router;
