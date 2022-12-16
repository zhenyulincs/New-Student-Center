const { Sequelize } = require('sequelize');
const user = require('../model/user');
const session = require('../model/session');
const major = require('../model/major');
const degree = require('../model/degree');
const degree_requirement = require('../model/degree_requirement');
const course = require('../model/course');
const prerequisite = require('../model/prerequisite');
const professor = require('../model/professor');
const section = require('../model/section');
const enrollment = require('../model/enrollment');
const review = require('../model/review');
const event = require('../model/event');
const timeslot = require('../model/timeslot');
const notification = require('../model/notification');
const transcript_record = require('../model/transcript_record');
const health_record = require('../model/health_record');
const financial_aid_record = require('../model/financial_aid_record');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const inserts = require('./inserts');


class repository {

    constructor() {
        this.sequelize = new Sequelize('postgres://csc648:zrk*vke-qkp-cbc7MXY@csc648group5.postgres.database.azure.com/csc648?sslmode=require')
        this.connect()
        this.build_tables()
    }

    build_tables() {
        // Building Models
        this.users = this.sequelize.define("users", user)
        this.sessions = this.sequelize.define("sessions", session)
        this.majors = this.sequelize.define("majors", major)
        this.degrees = this.sequelize.define("degrees", degree)
        this.degree_requirements = this.sequelize.define("degree_requirements", degree_requirement)
        this.courses = this.sequelize.define("courses", course)
        this.prerequisites = this.sequelize.define("prerequisites", prerequisite)
        this.professors = this.sequelize.define("professors", professor)
        this.sections = this.sequelize.define("sections", section)
        this.enrollments = this.sequelize.define("enrollments", enrollment)
        this.reviews = this.sequelize.define("reviews", review)
        this.events = this.sequelize.define("events", event)
        this.timeslots = this.sequelize.define("timeslots", timeslot)
        this.notifications = this.sequelize.define("notifications", notification)
        this.transcript_records = this.sequelize.define("transcript_records", transcript_record)
        this.health_records = this.sequelize.define("health_records", health_record)
        this.financial_aid_records = this.sequelize.define("financial_aid_records", financial_aid_record)
        // Building Relationships
        //unless specified as otherwise, we use sequelize's default fk constraints:
        //  ON UPDATE = CASCADE
        //  ON DELETE = SET NULL
        this.users.hasMany(this.sessions, { foreignKey: { name: 'user_fk' } })
        this.sessions.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        this.courses.hasMany(this.sections, { foreignKey: { name: 'course_fk' } })
        this.sections.belongsTo(this.courses, { foreignKey: { name: 'course_fk' } })

        this.professors.hasMany(this.sections, { foreignKey: { name: 'professor_fk' } })
        this.sections.belongsTo(this.professors, { foreignKey: { name: 'professor_fk' } })

        this.degrees.hasOne(this.users, { foreignKey: { name: 'degree_fk' } })
        this.users.belongsTo(this.degrees, { foreignKey: { name: 'degree_fk' } })

        this.majors.hasOne(this.degrees, { foreignKey: { name: 'major_fk' } })
        this.degrees.belongsTo(this.majors, { foreignKey: { name: 'major_fk' } })

        this.enrollments.hasOne(this.reviews, { foreignKey: { name: 'enrollment_fk' } })
        this.reviews.belongsTo(this.enrollments, { foreignKey: { name: 'enrollment_fk' } })

        this.professors.hasMany(this.reviews, { foreignKey: { name: 'professor_fk' } })
        this.reviews.belongsTo(this.professors, { foreignKey: { name: 'professor_fk' } })

        //section ISA event
        this.events.hasOne(this.sections, { foreignKey: { name: 'event_fk' } })
        this.sections.belongsTo(this.events, { foreignKey: { name: 'event_fk' } })

        this.events.hasMany(this.timeslots, { foreignKey: { name: 'event_fk' } })
        this.timeslots.belongsTo(this.events, { foreignKey: { name: 'event_fk' } })

        this.users.hasOne(this.transcript_records, { foreignKey: { name: 'user_fk' } })
        this.transcript_records.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        this.users.hasOne(this.health_records, { foreignKey: { name: 'user_fk' } })
        this.health_records.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        this.users.hasOne(this.financial_aid_records, { foreignKey: { name: 'user_fk' } })
        this.financial_aid_records.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        // course--<prerequisite>--course
        this.courses.belongsToMany(this.courses, {
            as: "prerequirer",
            through: this.prerequisites,
            foreignKey: { name: 'prerequired_fk' },
            otherKey: { name: 'prerequirer_fk' }
        })
        this.courses.belongsToMany(this.courses, {
            as: "prerequired",
            through: this.prerequisites,
            foreignKey: { name: 'prerequirer_fk' },
            otherKey: { name: 'prerequired_fk' }
        })

        // degree--<degree_requirement>--course
        this.degrees.belongsToMany(this.courses, {
            through: this.degree_requirements,
            foreignKey: { name: 'degree_fk' },
            otherKey: { name: 'course_fk' }
        })
        this.courses.belongsToMany(this.degrees, {
            through: this.degree_requirements,
            foreignKey: { name: 'course_fk' },
            otherKey: { name: 'degree_fk' }
        })

        // user--<notification>--timeslot
        this.timeslots.belongsToMany(this.users, {
            through: this.notifications,
            foreignKey: { name: 'timeslot_fk' },
            otherKey: { name: 'user_fk' }
        })
        this.users.belongsToMany(this.timeslots, {
            through: this.notifications,
            foreignKey: { name: 'user_fk' },
            otherKey: { name: 'timeslot_fk' }
        })
        this.timeslots.hasMany(this.notifications, { foreignKey: { name: 'timeslot_fk' } })
        this.notifications.belongsTo(this.timeslots, { foreignKey: { name: 'timeslot_fk' } })
        this.users.hasMany(this.notifications, { foreignKey: { name: 'user_fk' } })
        this.notifications.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })

        // user--<enrollment>--section
        this.sections.belongsToMany(this.users, {
            through: { model: this.enrollments, unique: false },
            foreignKey: { name: 'section_fk' },
            otherKey: { name: 'user_fk' }
        })
        this.users.belongsToMany(this.sections, {
            through: { model: this.enrollments, unique: false },
            foreignKey: { name: 'user_fk' },
            otherKey: { name: 'section_fk' }
        })
        this.sections.hasMany(this.enrollments, { foreignKey: { name: 'section_fk' } })
        this.enrollments.belongsTo(this.sections, { foreignKey: { name: 'section_fk' } })
        this.users.hasMany(this.enrollments, { foreignKey: { name: 'user_fk' } })
        this.enrollments.belongsTo(this.users, { foreignKey: { name: 'user_fk' } })
    }

    // Insert data
    create_tables() {
        new inserts().create_tables(this)
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