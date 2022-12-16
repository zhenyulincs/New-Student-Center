const {DataTypes} = require('sequelize')
const event = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true,
        //any additional details/explanation
    },
    event_type: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        //Checks if an event should be on the calendar or not
    },
    
}
module.exports = event;