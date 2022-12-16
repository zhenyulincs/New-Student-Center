const {DataTypes} = require('sequelize')
const review = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}
module.exports = review;