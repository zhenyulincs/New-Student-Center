const base_services = require("./base_services")

class calendar_services extends base_services {
    constructor() {
        super()
    }

    async get_calendar() {
        return await this.repository.events.findAll({
            where: {
                event_type: true,
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

module.exports = calendar_services