const {DataTypes} = require('sequelize')
const enrollment = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fully_enrolled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}
module.exports = enrollment;