const {DataTypes} = require('sequelize')
const prerequisite = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    concurrent_allowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    minimum_grade: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}
module.exports = prerequisite;