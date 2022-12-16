const base_services = require("./base_services")
const { Op, DataTypes } = require("sequelize");

class course_service extends base_services {
    constructor() {
        super()
    }

    async search_course(field, student_id) {
        return await this.repository.sections.findAll({
            distinct: true,
            logging: console.log,
            attributes: { //SELECT *, course.name, etc
                include: [
                    [this.repository.sequelize.col("professor.id"), "professor_id"],
                    [this.repository.sequelize.col("professor.name"), "professor_name"],
                    [this.repository.sequelize.col("course.name"), "name"],
                    [this.repository.sequelize.col("course.short_name"), "short_name"],
                    [this.repository.sequelize.col("event.location"), "location"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.start"), 'time'), "start_time"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.end"), 'time'), "end_time"],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 0)`), 'num_enrolled'],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 1)`), 'num_waitlisted'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."rating")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'rating'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."difficulty")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'difficulty'],
                ],
                exclude: ["createdAt", "updatedAt", "course_fk", "professor_fk", "event_fk"
                ]
            },
            include: [{ //JOIN Professors
                model: this.repository.professors,
                attributes: [],
                required: true
            }, {
                model: this.repository.enrollments,
                attributes: [],
                where: { user_fk: student_id },
                required: false
            }, { //JOIN courses
                model: this.repository.courses,
                attributes: [],
                where: { //ON id = variable
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${field}%` } },
                        { short_name: { [Op.iLike]: `%${field}%` } }
                    ]
                },
                required: true
            }, {
                model: this.repository.events,
                attributes: {exclude: ["createdAt", "updatedAt"]},
                include: [{
                    model: this.repository.timeslots,
                    attributes: [[this.repository.sequelize.fn('date_part', 'dow', this.repository.sequelize.col("start")), "dow"]],
                    required: true,
                }],
                required: true,
            }],
            order: [[this.repository.enrollments, 'updatedAt', 'desc'
            ]],
            raw: false,
            nest: true,
        })
        .then(function (retval) {
            let data = JSON.parse(JSON.stringify(retval))
            if (data.length == 0) {
                return "No Data"
            }
            else {
                //console.log(data) //debug output
                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i].event.timeslots)//debug output
                    var meeting_days_string = "" //get meeting_days as a readable string
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 1)) meeting_days_string += "Mon "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 2)) meeting_days_string += "Tue "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 3)) meeting_days_string += "Wed "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 4)) meeting_days_string += "Thu "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 5)) meeting_days_string += "Fri "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 6)) meeting_days_string += "Sat "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 0)) meeting_days_string += "Sun"
                    if (meeting_days_string[meeting_days_string.length - 1] == ' ') { //remove space from the end if any exists.
                        meeting_days_string = meeting_days_string.substring(0, meeting_days_string.length - 1)
                    }
                    data[i].meeting_days = meeting_days_string
                    delete data[i].event
                }

                let result = JSON.stringify(data, null, 2)

                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    async get_courses_by_professor(professor_id) {
        return await this.repository.sections.findAll({
            attributes: {
                include: [
                    [this.repository.sequelize.col("event.location"), "location"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.start"), 'time'), "start_time"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.end"), 'time'), "end_time"],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 0)`), 'num_enrolled'],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 1)`), 'num_waitlisted'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."rating")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'rating'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."difficulty")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'difficulty'],
                ],
                exclude: ["createdAt", "updatedAt", "course_fk", "professor_fk", "event_fk"
                ]
            },
            include: [{
                model: this.repository.courses,
                attributes: {exclude: ['createdAt', 'updatedAt']},
                required: true,
                include: [{
                    model: this.repository.courses,
                    attributes: ['short_name'],
                    as: "prerequired",
                    through: {
                        model: this.repository.prerequisites,
                        attributes: ['minimum_grade', 'concurrent_allowed']
                    },
                }]
            }, {
                model: this.repository.events,
                include: [{
                    model: this.repository.timeslots,
                    attributes: [[this.repository.sequelize.fn('date_part', 'dow', this.repository.sequelize.col("start")), "dow"]],
                    nest: true,
                    required: true,
                }],
                required: true,
            }, {
                model: this.repository.enrollments,
                required: false,
                include: [{
                    model: this.repository.reviews,
                    required: true
                }],
            }],
            where: {
                professor_fk: professor_id
            },
            order: [[this.repository.enrollments, 'updatedAt', 'desc'
            ]],
            raw: false,
            nest: true,
        })
            .then(function (retval) {
                let data = JSON.parse(JSON.stringify(retval))
                if (data.length == 0) {
                    return "No Data"
                }
                else {
                    for (var i = 0; i < data.length; i++) {
                        var meeting_days_string = "" //get meeting_days as a readable string
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 1)) meeting_days_string += "Mon "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 2)) meeting_days_string += "Tue "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 3)) meeting_days_string += "Wed "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 4)) meeting_days_string += "Thu "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 5)) meeting_days_string += "Fri "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 6)) meeting_days_string += "Sat "
                        if (data[i].event.timeslots.some(timeslot => timeslot.dow == 0)) meeting_days_string += "Sun"
                        if (meeting_days_string[meeting_days_string.length - 1] == ' ') { //remove space from the end if any exists.
                            meeting_days_string = meeting_days_string.substring(0, meeting_days_string.length - 1)
                        }
                        data[i].meeting_days = meeting_days_string
                        delete data[i].event
                    }

                    let result = JSON.stringify(data, null, 2)
                    //console.log("dfoaihwep: " + result) //debug output

                    delete result['createdAt']
                    delete result['updatedAt']
                    return JSON.parse(result)
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    //for sections in which the student has enrolled, waitlisted, or added to the shopping cart
    async get_courses_by_user(student_id) {
        return await this.repository.sections.findAll({
            unique: false,
            attributes: {
                include: [
                    [this.repository.sequelize.col("professor.name"), "professor_name"],
                    [this.repository.sequelize.col("course.name"), "name"],
                    [this.repository.sequelize.col("course.short_name"), "short_name"],
                    [this.repository.sequelize.col("event.location"), "location"],
                    [this.repository.sequelize.col("course.degrees.name"), "major"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.start"), 'time'), "start_time"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.end"), 'time'), "end_time"],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 0)
                        `), 'num_enrolled'],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 1)
                        `), 'num_waitlisted'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."rating")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'rating'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."difficulty")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'difficulty'],
                ],
                exclude: ["createdAt", "updatedAt", "course_fk", "professor_fk", "event_fk"
                ]
            },
            include: [{
                model: this.repository.professors,
                attributes: [],
                required: true
            }, {
                model: this.repository.enrollments,
                required: true,
                include: [{
                    model: this.repository.users,
                    attributes: [],
                    required: true,
                    where: {
                        id: student_id,
                    },
                }]
            }, {
                model: this.repository.courses,
                attributes: [],
                required: true,
                include: [{
                    through: {
                        model: this.repository.degree_requirements,
                        attributes: []
                    },
                    model: this.repository.degrees,
                    attributes: [],
                    required: false,
                    include: [{
                        model: this.repository.users,
                        attributes: [],
                        required: true,
                        where: {
                            id: student_id
                        }
                    }]
                }]
            }, {
                model: this.repository.events,
                include: [{
                    model: this.repository.timeslots,
                    attributes: [[this.repository.sequelize.fn('date_part', 'dow', this.repository.sequelize.col("start")), "dow"]],
                    nest: true,
                    required: true,
                }],
                required: true,
            }],
            order: [[this.repository.enrollments, 'updatedAt', 'desc'
            ]],
            raw: false,
            nest: true,
        })
        .then(function (retval) {
            let data = JSON.parse(JSON.stringify(retval))
            //console.log(data[3]) //debug output
            if (data.length == 0) {
                return "No Data"
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    var meeting_days_string = "" //get meeting_days as a readable string
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 1)) meeting_days_string += "Mon "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 2)) meeting_days_string += "Tue "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 3)) meeting_days_string += "Wed "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 4)) meeting_days_string += "Thu "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 5)) meeting_days_string += "Fri "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 6)) meeting_days_string += "Sat "
                    if (data[i].event.timeslots.some(timeslot => timeslot.dow == 0)) meeting_days_string += "Sun"
                    if (meeting_days_string[meeting_days_string.length - 1] == ' ') { //remove space from the end if any exists.
                        meeting_days_string = meeting_days_string.substring(0, meeting_days_string.length - 1)
                    }
                    data[i].meeting_days = meeting_days_string
                    delete data[i].event

                    //console.log(data[i].major)//debug output
                    if (!data[i].major) {
                        data[i].major = "GE"
                    }
                }

                let result = JSON.stringify(data, null, 2)

                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    async get_course(section_id) {
        return await this.repository.sections.findByPk(section_id, {
            attributes: {
                include: [
                    [this.repository.sequelize.col("professor.name"), "professor_name"],
                    [this.repository.sequelize.col("event.location"), "location"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.start"), 'time'), "start_time"],
                    [this.repository.sequelize.cast(this.repository.sequelize.col("event.timeslots.end"), 'time'), "end_time"],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 0)`), 'num_enrolled'],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."enrollment_status" = 1)`), 'num_waitlisted'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."rating")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'rating'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."difficulty")
                        FROM "enrollments"
                        JOIN "reviews" ON "reviews"."enrollment_fk" = "enrollments"."id"
                        WHERE "enrollments"."section_fk" = "sections"."id")`), 'difficulty'],
                ],
                exclude: ["createdAt", "updatedAt", "course_fk", "professor_fk", "event_fk"
                ]
            },
            include: [{
                model: this.repository.professors,
                attributes: [],
                required: true
            }, {
                model: this.repository.courses,
                attributes: {exclude:['createdAt', 'updatedAt']},
                required: true,
                include: [{
                    model: this.repository.courses,
                    attributes: ['short_name'],
                    as: "prerequired",
                    through: {
                        model: this.repository.prerequisites,
                        attributes: ['minimum_grade', 'concurrent_allowed']
                    },
                }]
            }, {
                model: this.repository.events,
                include: [{
                    model: this.repository.timeslots,
                    attributes: [[this.repository.sequelize.fn('date_part', 'dow', this.repository.sequelize.col("start")), "dow"]],
                    nest: true,
                    required: true,
                }],
                required: true,
            }, {
                model: this.repository.enrollments,
                attributes: { exclude: ["section_fk", "user_fk"] },
                include: [{
                    model: this.repository.reviews,
                    attributes: { exclude: ["createdAt", "updatedAt", "enrollment_fk", "professor_fk"]},
                    required: false
                }],
                required: false
            }],
            order: [[this.repository.enrollments, 'updatedAt', 'desc'
            ]],
            raw: false,
            nest: true,
        })
        .then(function (retval) {
            let data = JSON.parse(JSON.stringify(retval))
            console.log(data) //debug output
            var meeting_days_string = "" //get meeting_days as a readable string
            if (data.event.timeslots.some(timeslot => timeslot.dow == 1)) meeting_days_string += "Mon "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 2)) meeting_days_string += "Tue "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 3)) meeting_days_string += "Wed "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 4)) meeting_days_string += "Thu "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 5)) meeting_days_string += "Fri "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 6)) meeting_days_string += "Sat "
            if (data.event.timeslots.some(timeslot => timeslot.dow == 0)) meeting_days_string += "Sun"
            if (meeting_days_string[meeting_days_string.length - 1] == ' ') { //remove space from the end if any exists.
                meeting_days_string = meeting_days_string.substring(0, meeting_days_string.length - 1)
            }
            data.meeting_days = meeting_days_string
            delete data.event

            let result = JSON.stringify(data, null, 2)

            delete result['createdAt']
            delete result['updatedAt']
            return JSON.parse(result)
        })
        .catch((e) => {
            console.log(e)
        })
    }
}
module.exports = course_service