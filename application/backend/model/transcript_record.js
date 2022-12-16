const {DataTypes} = require('sequelize')
const transcript_record = {
    type: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        // 0 = sfsu transcript
        // 1 = other school transcript
        // 2 = [add more here as needed...]
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}
module.exports = transcript_record;