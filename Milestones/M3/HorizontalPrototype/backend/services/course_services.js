const base_services = require("./base_services")
const { Op } = require("sequelize");

class course_service extends base_services{
    constructor() {
        super()
    }
    async search_course(field) {
        
        return await this.repository.sections.findAll({
            attributes: {
                include: [
                    [this.repository.sequelize.col("professor.name"), "professor"],
                    [this.repository.sequelize.col("course.name"), "name"],
                    [this.repository.sequelize.col("course.short_name"), "short_name"],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."fully_enrolled" = true)`), 'num_enrolled'],
                    [this.repository.sequelize.literal(
                        `(SELECT COUNT("enrollments"."id")
                        FROM "enrollments"
                        WHERE "enrollments"."section_fk" = "sections"."id"
                        AND "enrollments"."fully_enrolled" = false)`), 'num_waitlisted'],
                ],
                exclude: ["createdAt", "updatedAt", "course_fk", "professor_fk"
                ]
            },
            include: [{
                model: this.repository.professors,
                attributes: ["name"],
                required: true
            },
            {
                model: this.repository.courses,
                attributes: [],
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${field}%` } },
                        { short_name: { [Op.iLike]: `%${field}%` } }
                    ]
                },
                required: true
            }],
            raw: true,
            nest: true,
        })
        .then(function (data) {
            if (data.length == 0) {
                return "No Data"
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    var meeting_days_string = ""
                    if (data[i].meeting_days & 0b0000001) meeting_days_string += "Mon "
                    if (data[i].meeting_days & 0b0000010) meeting_days_string += "Tue "
                    if (data[i].meeting_days & 0b0000100) meeting_days_string += "Wed "
                    if (data[i].meeting_days & 0b0001000) meeting_days_string += "Thu "
                    if (data[i].meeting_days & 0b0010000) meeting_days_string += "Fri "
                    if (data[i].meeting_days & 0b0100000) meeting_days_string += "Sat "
                    if (data[i].meeting_days & 0b1000000) meeting_days_string += "Sun"
                    if (meeting_days_string[meeting_days_string.length-1] == ' ') {
                        meeting_days_string = meeting_days_string.substring(0, meeting_days_string.length - 1)
                    }
                    data[i].meeting_days = meeting_days_string
                }

                let result = JSON.stringify(data, null, 2)

                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
            
        })

    }
}
module.exports = course_service