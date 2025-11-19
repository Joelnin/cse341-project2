const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Regions']
    const result = await mongodb.getDatabase().db().collection('regions').find();
    result.toArray().then((regions) => {

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(regions)
    
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Regions']
    const regionId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('regions').find({ _id : regionId });
    result.toArray().then((regions) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(regions[0])
    
    });
};

const createRegion = async (req, res) => {
    //#swagger.tags = ['Regions']
    const region = {
        name: req.body.name,
        class: req.body.class,
        race: req.body.race,
        origin: req.body.origin,
        abilities: req.body.abilities,
        hiddenAbility: req.body.hiddenAbility,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('regions').insertOne(region);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the region.');
    }
};


const updateRegion = async (req, res) => {
    //#swagger.tags = ['Regions']
    const regionId = new ObjectId(req.params.id);
    const region = {
        name: req.body.name,
        class: req.body.class,
        race: req.body.race,
        origin: req.body.origin,
        abilities: req.body.abilities,
        hiddenAbility: req.body.hiddenAbility,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('regions').replaceOne({ _id: regionId }, region);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the region.');
    }
};

const deleteRegion = async (req, res) => {
    //#swagger.tags = ['Regions']
    const regionId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('regions').deleteOne({ _id: regionId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the region.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createRegion,
    updateRegion,
    deleteRegion
};