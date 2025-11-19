const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Heroes']

    try {

        const heroes = await mongodb
            .getDatabase()
            .db()
            .collection('heroes')
            .find()
            .toArray();
        
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(heroes)
        
    } catch (error) {

        console.error("Error getting heroes:", error);
        res.status(500).json({ message: "Internal Server Error", error });

    }

};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Heroes']

    try {

        const heroeId = new ObjectId(req.params.id);

        if (!ObjectId.isValid(heroeId)) {
            return res.status(400).json({ message: "Bad Request" });
        }

        const heroe = await mongodb
            .getDatabase()
            .db()
            .collection('heroes')
            .find({ _id: heroeId })
            .toArray();

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(heroe[0])

        if (!creature) {

            return res.status(404).json({ message: "Heroe not found" });
        }
        
    } catch (error) {

        
        
    }

    result.toArray().then((heroes) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(heroes[0])
    
    });
};

const createHeroe = async (req, res) => {
    //#swagger.tags = ['Heroes']
    const heroe = {
        name: req.body.name,
        class: req.body.class,
        race: req.body.race,
        origin: req.body.origin,
        abilities: req.body.abilities,
        hiddenAbility: req.body.hiddenAbility || null,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('heroes').insertOne(heroe);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the heroe.');
    }
};


const updateHeroe = async (req, res) => {
    //#swagger.tags = ['Heroes']
    const heroeId = new ObjectId(req.params.id);
    const heroe = {
        name: req.body.name,
        class: req.body.class,
        race: req.body.race,
        origin: req.body.origin,
        abilities: req.body.abilities,
        hiddenAbility: req.body.hiddenAbility || null,
        lore: req.body.lore
    };
    const response = await mongodb.getDatabase().db().collection('heroes').replaceOne({ _id: heroeId }, heroe);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the heroe.');
    }
};

const deleteHeroe = async (req, res) => {
    //#swagger.tags = ['Heroes']
    const heroeId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('heroes').deleteOne({ _id: heroeId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the heroe.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createHeroe,
    updateHeroe,
    deleteHeroe
};