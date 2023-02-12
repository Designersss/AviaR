const uuid = require('uuid')
const path = require('path')
const {Avia} = require('../models/models')
const ApiError = require('../error/ApiError')
class AviaController {
    async create(req, res, next) {
        try {
            const {name, description, price, information_from, information_where, departure_time, path_time, country} = req.body
            const {imgOne} = req.files
            const {imgTwo} = req.files
            const {imgThree} = req.files
            let fileNameOne = uuid.v4() + ".jpg"
            let fileNameTwo = uuid.v4() + ".jpg"
            let fileNameThree = uuid.v4() + ".jpg"
            imgOne.mv(path.resolve(__dirname, '..', 'static', fileNameOne))
            imgTwo.mv(path.resolve(__dirname, '..', 'static', fileNameTwo))
            imgThree.mv(path.resolve(__dirname, '..', 'static', fileNameThree))
            const avia = await Avia.create({name, description, price, information_from, information_where, departure_time, path_time, country,  imgOne: fileNameOne, imgTwo: fileNameTwo, imgThree: fileNameThree})
            return res.json(avia)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {typeCountryId} = req.query
        let devices;
        if(!typeCountryId){
            devices = await Avia.findAll()
            return res.json(devices)
        }
        if(typeCountryId){
            devices = await Avia.findAll({where: {typeCountryId}})
            return res.json(devices)
        }

    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Avia.findOne(
            {
                where: {id},
            }
        )
        return res.json(device)
    }
}

module.exports = new AviaController()