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
    last_term_registered: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expected_grad_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    graduation_status: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        //0 = not yet applied for graduation
        //1 = applied for graduation
    },
    academic_standing: {
        type: DataTypes.STRING,
        defaultValue:"Good",
        allowNull: false
    },
}
module.exports = user;