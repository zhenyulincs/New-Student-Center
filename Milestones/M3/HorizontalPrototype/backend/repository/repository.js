const { Sequelize } = require('sequelize');
const user = require('../model/user');
const major = require('../model/major');
const course = require('../model/course');
const professor = require('../model/professor');
const section = require('../model/section');
const enrollment = require('../model/enrollment');
const grade = require('../model/grade');
const review = require('../model/review');
const crypto = require('crypto');


class repository {

    constructor() {
        this.sequelize = new Sequelize('postgres://csc648:zrk*vke-qkp-cbc7MXY@csc648group5.postgres.database.azure.com/csc648?sslmode=require')
        this.connect()
        this.build_tables()
        
    }
    build_tables() {
        // Building Models
        this.users = this.sequelize.define("users",user)
        this.majors = this.sequelize.define("majors",major)
        this.courses = this.sequelize.define("courses", course)
        this.professors = this.sequelize.define("professors", professor)
        this.sections = this.sequelize.define("sections", section)
        this.enrollments = this.sequelize.define("enrollments", enrollment)
        this.grades = this.sequelize.define("grades", grade)
        this.reviews = this.sequelize.define("reviews", review)

        // Building Relationships
        //unless specified as otherwise, we use sequelize's default fk constraints:
        //  ON UPDATE = CASCADE
        //  ON DELETE = SET NULL
        this.courses.hasMany(this.sections, { foreignKey: { name: 'course_fk' } })
        this.sections.belongsTo(this.courses, { foreignKey: { name: 'course_fk' } })

        this.professors.hasMany(this.sections, { foreignKey: { name: 'professor_fk' } })
        this.sections.belongsTo(this.professors, { foreignKey: { name: 'professor_fk' } })

        // user--<enrollment>--section
        this.sections.belongsToMany(this.users, {
            through: this.enrollments,
            foreignKey: { name: 'section_fk' },
            otherKey: { name: 'user_fk' }
        })
        this.users.belongsToMany(this.sections, {
            through: this.enrollments,
            foreignKey: { name: 'user_fk' },
            otherKey: { name: 'section_fk' }
        })
        this.sections.hasMany(this.enrollments, { foreignKey: { name: 'section_fk' } })
        this.enrollments.belongsTo(this.sections, { foreignKey: { name: 'section_fk' } })
        this.users.hasMany(this.enrollments, { foreignKey: { name: 'user_fk' } })
        this.enrollments.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        // user--<grade>--section
        this.sections.belongsToMany(this.users, {
            through: this.grades,
            foreignKey: { name: 'section_fk' },
            otherKey: { name: 'user_fk' }
        })
        this.users.belongsToMany(this.sections, {
            through: this.grades,
            foreignKey: { name: 'user_fk' },
            otherKey: { name: 'section_fk' }
        })
        this.sections.hasMany(this.grades, { foreignKey: { name: 'section_fk' } })
        this.grades.belongsTo(this.sections, { foreignKey: { name: 'section_fk' } })
        this.users.hasMany(this.grades, { foreignKey: { name: 'user_fk' } })
        this.grades.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        // grade--<review>--professor
        this.professors.belongsToMany(this.grades, {
            through: this.reviews,
            foreignKey: { name: 'section_fk' },
            otherKey: { name: 'user_fk' }
        })
        this.grades.belongsToMany(this.professors, {
            through: this.reviews,
            foreignKey: { name: 'user_fk' },
            otherKey: { name: 'section_fk' }
        })
        this.professors.hasMany(this.reviews, { foreignKey: { name: 'section_fk' } })
        this.reviews.belongsTo(this.professors, { foreignKey: { name: 'section_fk' } })
        this.grades.hasMany(this.reviews, { foreignKey: { name: 'user_fk' } })
        this.reviews.belongsTo(this.grades, { foreignKey: { name: 'user_fk' } })
    }
    create_tables() {
        (async () => {
            await this.sequelize.sync({ force: true });
            await this.courses.bulkCreate([
                {
                    name: "English Reading and Composition",
                    short_name: "ENG100"
                },
                {
                    name: "Algebra",
                    short_name: "MATH200"
                },
                {
                    name: "Elementary Chinese I",
                    short_name: "CHIN100"
                }
            ])
            await this.professors.bulkCreate([
                {
                    name: "Paul Robsen"
                },
                {
                    name: "Ada Locklace"
                },
                {
                    name: "Michael Michael"
                }
            ])
            await this.sections.bulkCreate([
                {
                    professor_fk: 1,
                    course_fk: 1,
                    class_number: "1234",
                    section_number: 1,
                    location: "Thornton Hall 329",
                    instruction_mode: 1,
                    meeting_days: 0b00010101,
                    start_time: "10:00:00",
                    end_time: "10:50:00",
                    seat_capacity: 30,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes:"Lower Division",
                    units:3
                },
                {
                    professor_fk: 2,
                    course_fk: 2,
                    class_number:"1324",
                    section_number: 1,
                    location: "Thornton Hall 328",
                    instruction_mode: 1,
                    meeting_days: 0b00000101,
                    start_time: "11:00:00",
                    end_time: "12:45:00",
                    seat_capacity: 40,
                    waitlist_capacity: 15,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes:"Lower Division",
                    units:3
                },
                {
                    professor_fk: 3,
                    course_fk: 3,
                    class_number: "1432",
                    section_number: 1,
                    location: "Thornton Hall 328",
                    instruction_mode: 1,
                    meeting_days: 0b00001010,
                    start_time: "10:00:00",
                    end_time: "11:30:00",
                    seat_capacity: 36,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes:"Lower Division",
                    units:3
                }
            ])
            await this.majors.create({
                name: "English"
            })
            await this.users.create({
                username: "Test",
                email:"Test@Test",
                password:"123456789a",
                student_id:"12345678",
                token:crypto.randomUUID()
            })
            await this.enrollments.create({
                section_fk: 3,
                user_fk: 1,
                fully_enrolled: true
            })
        })()
        
        
        
        console.log("All models were synchronized successfully.");
    }
    connect() {
        try {
            this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    get_repository() {
        return this.sequelize
    }
}
module.exports = repository;