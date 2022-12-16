const {DataTypes} = require('sequelize')
const major = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "English"
    },
}
module.exports = major
