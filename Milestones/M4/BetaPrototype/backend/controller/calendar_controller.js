const calendar_services = require("../services/calendar_services")
const base_controller = require("./base_controller")

class calendar_controller extends base_controller{
    constructor() {
        super()
        this.calendar_services = new calendar_services()
    }

    get_calendar(req, res){
        if (this.is_contain_null(req)) {
            res.send({ "get_calendar_status": "req cannot be null" })
            return
        }
        else {
            (async () => {
                    const result = await this.calendar_services.get_calendar(req)
                    console.log(result)
                res.send({
                    "status": {
                        "message": "success",
                        "result": result
                    }
                })
            })()
            
        }
    }
}

module.exports = calendar_controller