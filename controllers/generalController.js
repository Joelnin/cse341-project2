const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

function getAll(collection) {

    return async (req, res) => {

        try {

            const results = await mongodb
                .getDatabase()
                .db()
                .collection(collection)
                .find()
                .toArray();            
        
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(results)
        
        } catch (error) {

            console.error(`Error getting ${collection}:`, error);

            res.status(500).json({ message: "Internal Server Error", error });

        }
    }
};

function getSingle(collection) {

    return async (req, res) => {

        try {

            const resultId = new ObjectId(req.params.id);

            const result = await mongodb
                .getDatabase()
                .db()
                .collection(collection)
                .find({ _id: resultId })
                .toArray();
            
            res.setHeader('Content-Type', 'application/json');            
            res.status(200).json(result[0])
            
        } catch (error) {

            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
};

function createInstance(collection) {

    return async (req, res) => {

        try {

            const instance = req.body;

            const response = await mongodb
                .getDatabase()
                .db()
                .collection(collection)
                .insertOne(instance);

            if (response.acknowledged) {

                res.status(204).send();
            
            };
            
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    
};

function updateInstance(collection) {

    return async (req, res) => {

        try {

            const resultId = new ObjectId(req.params.id);

            

            const instance = req.body;

            const response = await mongodb
                .getDatabase()
                .db()
                .collection(collection)
                .replaceOne(
                    { _id: resultId },
                    instance
                );

            if (response.modifiedCount > 0) {
                res.status(204).send();
            }
            
        } catch (error) { 

            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
};

function deleteInstance(collection) {

    return async (req, res) => {

        try {
            
            const resultId = new ObjectId(req.params.id);

            const response = await mongodb
                .getDatabase()
                .db()
                .collection(collection)
                .deleteOne({ _id: resultId });
            
            if (response.deletedCount > 0) {
                res.status(204).send();
            }

        } catch (error) {
            
            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
};


module.exports = {
    getAll,
    getSingle,
    createInstance,
    updateInstance,
    deleteInstance
};