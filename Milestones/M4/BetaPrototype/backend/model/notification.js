const {DataTypes} = require('sequelize')
const notification = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    read_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        //true = read,
        //false = unread
    }
}
module.exports = notification;