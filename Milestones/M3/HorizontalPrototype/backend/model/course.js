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
    //define prerequisites here

}
module.exports = course;