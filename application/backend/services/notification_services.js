const base_services = require("./base_services")
const { Op, DataTypes } = require("sequelize");

class notification_service extends base_services{
    constructor() {
        super()
    }

    async get_notifications(user_id) {
        return await this.repository.notifications.findAll({
            attributes: {
                include: [
                    [this.repository.sequelize.col("timeslot.event.name"), "name"],
                    [this.repository.sequelize.col("timeslot.event.details"), "details"],
                    [this.repository.sequelize.col("timeslot.start"), "start_time"],
                    [this.repository.sequelize.col("timeslot.end"), "end_time"],
                ],
                exclude: ["createdAt", "updatedAt"
                ]
            },
            include: [{
                model: this.repository.timeslots,
                attributes: [],
                include: [{
                    model: this.repository.events,
                    attributes: [],
                    required: true,
                }],
                required: true,
            }],
            where: {
                user_fk: user_id
            },
            raw: true,
            nest: true,
        })
        .then(function (retval) {
            let data = JSON.parse(JSON.stringify(retval))
            if (data.length == 0) {
                return "No Data"
            }
            else {
                let result = JSON.stringify(data, null, 2)
                
                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }  
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    async read_notification(notification_id) {
        let result = await this.repository.notifications.findOne({
            where: {
                id: notification_id,
            },
            raw: true,
            nest: true,
        })
        .catch((e) => {
            console.log(e)
        })

        if (result) {
            await this.repository.notifications.update({
                read_status: true
            }, {
                where: {
                    id: result.id
                }
            })
            return "marked notification as read, notification_id: "+notification_id
        }
    }
}
module.exports = notification_service