const base_services = require("./base_services")
const { Op } = require("sequelize")

class enrollment_services extends base_services {
    constructor() {
        super()
    }

    async check_if_already_enrolled(student_id, section_id) {
        return await this.repository.sections.findByPk(section_id, {
            include: [{
                model: this.repository.courses,
                required: true,
                include: [{
                    model: this.repository.sections,
                    required: false,
                    include: [{
                        model: this.repository.enrollments,
                        required: true,
                        where: {
                            user_fk: student_id,
                            enrollment_status: 0
                        },
                    }],
                }],
            }],
        })
        .then(function (retval) { 
            let results = JSON.parse(JSON.stringify(retval))
            if (0 == results.course.sections.length) {
                return false //not already enrolled
            } else {
                return results.course.sections[0] //already enrolled in another section of this class
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    async check_prerequisites(student_id, section_id) {
        return await this.repository.sections.findByPk(section_id, {
            attributes: ['id'],
            include: [{
                model: this.repository.courses,
                attributes: ['id'],
                required: true,
                include: [{
                    model: this.repository.courses,
                    attributes: ['short_name'],
                    as: "prerequired",
                    through: {
                        model: this.repository.prerequisites,
                        attributes: ['minimum_grade', 'concurrent_allowed']
                    },
                    required: false,
                    include: [{
                        model: this.repository.sections,
                        attributes: ['id'],
                        required: false,
                        include: [{
                            model: this.repository.enrollments,
                            attributes: ['grade'],
                            where: {
                                user_fk: student_id,
                                enrollment_status: { [Op.in]: [0, 1, 4] },
                            },
                            required: true,
                        }],
                    }],
                }],
            }],
            raw: false,
            nest: true,
        })
        .then(function (retval) {
            let data = JSON.parse(JSON.stringify(retval))
            //console.log("data "+JSON.stringify(data)) //debug output
            console.log("prereqs " + JSON.stringify(data.course.prerequired)) //debug output

            const grade_array = ["A", "B", "C", "D", "F"]
            for (var i = 0; i < data.course.prerequired.length; i++) {
                let grade_array_trunc = grade_array.slice()
                while (grade_array_trunc[grade_array_trunc.length - 1] != data.course.prerequired[i].prerequisites.minimum_grade) {
                    grade_array_trunc.length--;
                }
                if (data.course.prerequired[i].prerequisites.concurrent_allowed) {
                    grade_array_trunc.push(null)
                }
                console.log("len" + data.course.prerequired[i].sections.length)
                if (0 != data.course.prerequired[i].sections.length) {
                    for (var j = 0; j < data.course.prerequired[i].sections.length; j++) {
                        console.log("grade"+data.course.prerequired[i].sections[j].enrollments[0].grade)
                        if (grade_array_trunc.includes(data.course.prerequired[i].sections[j].enrollments[0].grade)) {
                            data.course.prerequired.splice(i, 1) //delete the element from the array, prereq is fulfilled
                            break
                        }
                    }
                }
            }
            //console.log("prereqs post check" + JSON.stringify(data.course.prerequired)) //debug output
            return data.course.prerequired
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    async check_capacity(section_id) {
        return await this.repository.enrollments.findOne({
            attributes: [
                [this.repository.sequelize.col("section.seat_capacity"), "seat_capacity"],
                [this.repository.sequelize.col("section.waitlist_capacity"), "waitlist_capacity"],
                [this.repository.sequelize.literal(
                    `(SELECT COUNT("enrollments"."id")
                    FROM "enrollments"
                    WHERE "enrollments"."section_fk" = "section"."id"
                    AND "enrollments"."enrollment_status" = 0)`), 'num_enrolled'],
                [this.repository.sequelize.literal(
                    `(SELECT COUNT("enrollments"."id")
                    FROM "enrollments"
                    WHERE "enrollments"."section_fk" = "section"."id"
                    AND "enrollments"."enrollment_status" = 1)`), 'num_waitlisted'],
            ],
            include: [{
                model: this.repository.sections,
                attributes: [],
                required: true
            }],
            where: {
                section_fk: section_id
            },
            raw: true,
            nest: false,
        })
        .then(function (results) {
            //console.log(results) //debug output
            if ((!results) || (results.num_enrolled + 1 <= results.seat_capacity)) {
                return 0
            } else if (results.num_waitlisted + 1 <= results.waitlist_capacity) {
                return 1
            } else {
                return -1
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    async enroll(student_id, section_id, enrollment_status) {
        //insert the new enrollment
        let enrollment_status_string = ""
        if (enrollment_status == 0) {
            enrollment_status_string = "enrollment"
        } else if (enrollment_status == 1) {
            enrollment_status_string = "waitlist"
        }
        await this.repository.enrollments.update(
            {
                grading_option: 0,
                enrollment_status: enrollment_status,
                grade: null,
            }, {
                where: {
                    section_fk: section_id,
                    user_fk: student_id,
                    enrollment_status: 2
                }
            }
        )
        return enrollment_status_string + " success"
    }

    async drop(student_id, section_id) {
        var enrollment = await this.repository.enrollments.findOne({
            where: {
                user_fk: student_id,
                section_fk: section_id,
                enrollment_status: {
                    [Op.in]: [0, 1, 2]
                }
            }
        })
        console.log(enrollment)
        if (enrollment) {
            await this.repository.enrollments.update({
                enrollment_status: 3,
                grade: "W"
            }, {
                where: {
                    id: enrollment.id
                }
            })
            return "drop successful"
        }
        return "not currently enrolled in section "+section_id
    }

    async change_grading_option(student_id, section_id) {
        let grading_option_new = null
        const enrollment = await this.repository.enrollments.findOne({
            where: {
                user_fk: student_id,
                section_fk: section_id
            }
        })

        if (!enrollment) {
            return "not enrolled in this section"
        }
        if (enrollment.grading_option == 1) {
            grading_option_new = 0
        } else if (enrollment.grading_option == 0) {
            grading_option_new = 1
        }
        await this.repository.enrollments.update({
            grading_option: grading_option_new
        }, {
            where: {
                user_fk: student_id,
                section_fk: section_id
            }
        })
        return "grading option change successful"
    }

    async swap_course(student_id, section_id_from, section_id_to) {
        await this.repository.enrollments.update({
            section_fk: section_id_to
        }, {
            where: {
                user_fk: student_id,
                section_fk: section_id_from
            }
        })
    }
}



module.exports = enrollment_services