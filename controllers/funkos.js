const Funko = require('../models/Funko');

function getFunkos(req, res) {
    const filters = {}
    if (req.query.isExclusive) {
        filters.isExclusive = req.query.isExclusive === "true";
    }
    if (req.query.exclusiveStore) {
        filters.exclusiveStore = req.query.exclusiveStore;
    }
    if (req.query.name) {
        filters.name = req.query.name;
    }
    if (req.query.upc) {
        filters.upc = req.query.upc;
    }
    if (req.query.number) {
        filters.number = req.query.number;
    }
    if (req.query.fandom) {
        filters.fandom = req.query.fandom;
    }
    if (req.query.category) {
        filters.category = req.query.category;
    }
    Funko.find(filters).then(function(funkos) {
        res.send(funkos)
    });
}

function createFunko(req, res) {
    const body = req.body;
    const funko = new Funko(body);
    Funko.create(funko).then(function (funko) {
        res.status(201).send(funko)
    })
    .catch(function (error) {
        res.status(400).send({"message": error.message, "type": error.name});
    })
}

module.exports = {
    createFunko,
    getFunkos
}