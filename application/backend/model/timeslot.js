const {DataTypes} = require('sequelize')
const timeslot = {
    start: {
        type: DataTypes.DATE,
        allowNull: false,
        // 1996-01-01 = Monday
        //      01-02 = Tuesday
        //      01-03 = Wednesday
        //      01-04 = Thursday
        //      01-05 = Friday, etc...
    },
    end: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    recurring: {
        type: DataTypes.SMALLINT,
        allowNull: false
        // 0 = non-repeating
        // 1 = repeats weekly
        // 2 = repeats monthly
        // 3 = repeats annually by date
        // 4 = repeates annually by weekday (e.g. 3rd Sunday of every January)
    },
}
module.exports = timeslot;