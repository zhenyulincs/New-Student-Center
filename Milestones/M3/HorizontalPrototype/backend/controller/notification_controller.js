const notification_services = require("../services/course_services") //Check services
const base_controller = require("./base_controller")
class notification_controller extends base_controller{
    constructor() {
        super()
        this.notification_services = new notification_services()
    }
    register(req, res) { //Update register

        const body = [
            //Put proper body
            //course id user identification and login statu
        ]
        if (this.is_contain_null(body)) {
            res.send({"notification_status":"course_id/user_id can't be null"})
        } 
        else if (!this.onlyNumbers(req.body.student_id)) { //User must beg logged in 
            res.send({"notification_status":"student id should be number"})
        }
        else {
            (async () => {

                //Need to create notification service
                const result = await this.notification_services.notification.apply(this.notification_services, body) // equal to this.register_services.register(username,password,email,student_id)
                console.log(result)
                res.send({"notification_status":result})
            })()
            
        }
        
    }
}

module.exports = notification_controller