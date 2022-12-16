const base_services = require("./base_services")
const { Op } = require("sequelize")

class schedule_services extends base_services {
    constructor() {
        super()
    }

    async get_calendar_entries(student_id, only_classes) {
        return await this.repository.timeslots.findAll({
            include: [{
                model: this.repository.events,
                required: true,
                include: [{
                    model: this.repository.sections,
                    required: only_classes, //from params, determines whether to show only classes vs showing all events
                    include: [{
                        model: this.repository.enrollments,
                        required: true,
                        where: {
                            user_fk: student_id,
                        }
                    }]
                }],
            }],
            where: {
                user_fk: student_id,
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}



module.exports = schedule_services