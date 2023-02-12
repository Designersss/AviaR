const {TypeCountry} = require('../models/models')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await TypeCountry.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await TypeCountry.findAll()
        return res.json(types)
    }

    async getOne(req, res) {
        const typesOne = await TypeCountry.findOne()
        return res.json(typesOne)
    }
}

module.exports = new TypeController()