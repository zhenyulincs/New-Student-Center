const {DataTypes} = require('sequelize')
const enrollment = {
    id: { //define primary key manually for every 'through' table (associative entities)
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    enrollment_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // 0 = fully enrolled
        // 1 = waitlisted
        // 2 = in shopping cart
        // 3 = dropped
        // 4 = completed
    },
    grading_option: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        //0 = letter grade
        //1 = CR/NC
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: true,
        // letter grade value = completed the class
        // null = currently enrolled
    },
}
module.exports = enrollment;