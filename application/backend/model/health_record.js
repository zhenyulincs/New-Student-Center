const {DataTypes} = require('sequelize')
const health_record = {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        // 0 = male
        // 1 = female
        // 3 = [add more here as needed...]
    },
    date_of_birth: { //age derived from here
        type: DataTypes.DATE,
        allowNull: false,
    },
    height: {
        type: DataTypes.INTEGER, //should determine units
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER, //determine units
        allowNull: false,
    },
    street_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    allergies: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ethnicity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mental_illness: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
module.exports = health_record;