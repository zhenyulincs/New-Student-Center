const {DataTypes} = require('sequelize')
const financial_aid_record = {
    estimated_amount: {
        // TODO(cyee): float or maybe double for cent precision?
        //will check sequelize and postgres datatypes to resolve.
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}
module.exports = financial_aid_record;