const {DataTypes} = require('sequelize')
const course = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    professor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    class_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    waitlist: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_attributes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    units: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}
module.exports = course;