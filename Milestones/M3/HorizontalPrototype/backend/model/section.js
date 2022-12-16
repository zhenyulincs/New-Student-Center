const {DataTypes} = require('sequelize')
const section = {
    class_number: { //CRN
        type: DataTypes.STRING,
        allowNull: false,
    },
    section_number: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instruction_mode: { //0 = in person, 1 = hybrid, 2 = online synchronous, 3 = online asynchronous,
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    //bitmap: 0b  0  0  0  0  0  0  0     only lowest 7 bits considered
    //            Su Sa Fr Th We Tu Mo
    meeting_days: {
        type: DataTypes.SMALLINT,
        allowNull: true,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: true,
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