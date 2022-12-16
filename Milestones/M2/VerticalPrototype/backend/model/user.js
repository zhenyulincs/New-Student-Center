const {DataTypes} = require('sequelize')
const user = {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    student_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    academic_standing: {
        type: DataTypes.STRING,
        defaultValue:"Good",
        allowNull: false
    },
    token: {
        type: DataTypes.UUID,
        allowNull: false
    }

}
module.exports = user;