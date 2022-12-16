const {DataTypes} = require('sequelize')
const degree = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        //e.g. Computer Science
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false,
        //e.g. BS
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false,
        //e.g. Undergraduate
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false,
        //e.g. Undergraduate Degree-FA
    },
}
module.exports = degree
