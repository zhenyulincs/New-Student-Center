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
        //out of 5.00
    },
    difficulty: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        //out of 5.00
    },
}
module.exports = review;