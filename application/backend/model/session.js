const {DataTypes} = require('sequelize')
const session = {
    token: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    user_fk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}
module.exports = session;