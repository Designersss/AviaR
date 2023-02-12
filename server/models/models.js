const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketAvia = sequelize.define('BasketAvia', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Avia = sequelize.define('avia', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(1500)},
    price: {type: DataTypes.INTEGER},
    imgOne: {type: DataTypes.STRING, allowNull: true},
    imgTwo: {type: DataTypes.STRING, allowNull: true},
    imgThree: {type: DataTypes.STRING, allowNull: true},
    information_from: {type: DataTypes.STRING, allowNull: false},
    information_where: {type: DataTypes.STRING, allowNull: false},
    departure_time: {type: DataTypes.INTEGER, allowNull: false},
    path_time: {type: DataTypes.INTEGER,},
})

const TypeCountry = sequelize.define('typeCountry', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketAvia)
BasketAvia.belongsTo(Basket)

BasketAvia.hasMany(Avia)
Avia.belongsTo(BasketAvia)

TypeCountry.hasMany(Avia)
Avia.belongsTo(TypeCountry)

User.hasMany(Avia)
Avia.belongsTo(User)

module.exports = {
    User,
    Basket,
    BasketAvia,
    Avia,
    TypeCountry
}