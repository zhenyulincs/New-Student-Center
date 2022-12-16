const notification_services = require("../services/notification_services") //Check services
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class notification_controller extends base_controller{
    constructor() {
        super()
        this.notification_services = new notification_services()
        this.login_services = new login_services()
    }

    notification(req, res) {
        const body = [
            req.body.token
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "notification error:",
                    "result": "body cannot be null"
                }
            })
        } 
        else {
            (async () => {
                let result
                let status = "success"
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "notification error:"
                    result = "invalid session token"
                } else {
                    result = await this.notification_services.get_notifications(student_id)
                    //console.log(result)//debug output
                }
                res.send({
                    "status": {
                        "message": status,
                        "result": result
                    }
                })
            })()
        }
    }

    read_notification(req, res) {
        const body = [
            req.body.notification_id
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "notification error:",
                    "result": "body cannot be null"
                }
            })
        }
        else {
            (async () => {
                let status = "success"
                let result = await this.notification_services.read_notification(req.body.notification_id)
                //console.log(result)//debug output
                res.send({
                    "status": {
                        "message": status,
                        "result": result
                    }
                })
            })()
        }
    }
}

module.exports = notification_controller