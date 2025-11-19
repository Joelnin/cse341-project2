const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Creatures']
    const result = await mongodb.getDatabase().db().collection('creatures').find();
    result.toArray().then((creatures) => {

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(creatures)
    
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Creatures']
    const creatureId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('creatures').find({ _id : creatureId });
    result.toArray().then((creatures) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(creatures[0])
    
    });
};

const createCreature = async (req, res) => {
    //#swagger.tags = ['Creatures']
    const creature = {
        creatureName: req.body.creatureName,
        creatureType: req.body.creatureType,
        alignment: req.body.alignment,
        hitPoints: req.body.hitPoints,
        creatureSize: req.body.creatureSize,
        abilities: req.body.abilities,
        weaknesses: req.body.weaknesses,
        region: req.body.region,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('creatures').insertOne(creature);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the creature.');
    }
};


const updateCreature = async (req, res) => {
    //#swagger.tags = ['Creatures']
    const creatureId = new ObjectId(req.params.id);
    const creature = {
        creatureName: req.body.creatureName,
        creatureType: req.body.creatureType,
        alignment: req.body.alignment,
        hitPoints: req.body.hitPoints,
        creatureSize: req.body.creatureSize,
        abilities: req.body.abilities,
        weaknesses: req.body.weaknesses,
        region: req.body.region,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('creatures').replaceOne({ _id: creatureId }, creature);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the creature.');
    }
};

const deleteCreature = async (req, res) => {
    //#swagger.tags = ['Creatures']
    const creatureId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('creatures').deleteOne({ _id: creatureId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the creature.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createCreature,
    updateCreature,
    deleteCreature
};