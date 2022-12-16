const {DataTypes} = require('sequelize')
const degree_requirement = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
}
module.exports = degree_requirement
