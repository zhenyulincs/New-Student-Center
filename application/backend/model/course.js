const {DataTypes} = require('sequelize')
const course = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    short_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
module.exports = course;