const {DataTypes} = require('sequelize')
const section = {
    class_number: { //NOTE(cyee): CRN? should this just be the primary key?
        type: DataTypes.STRING,
        allowNull: false,
    },
    section_number: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    instruction_mode: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        // 0 = in person
        // 1 = hybrid
        // 2 = online synchronous
        // 3 = online asynchronous
    },
    seat_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    waitlist_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_component: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    term: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_attributes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    units: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
}
module.exports = section;