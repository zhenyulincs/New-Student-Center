const enrollment_services = require("../services/course_services") //Change services
const base_controller = require("./base_controller")
class enrollment_controller extends base_controller{
    constructor() {
        super()
        this.enrollment_services = new enrollment_services()
    }
    register(req, res) { //Update register

        const body = [
            //Put proper body
            //course id user identification and login statu
        ]
        if (this.is_contain_null(body)) {
            res.send({"enrollment_status":"course_id/user_id can't be null"})
        } 
        else if (!this.onlyNumbers(req.body.student_id)) { //User must beg logged in. Front end sends the status according to /dashboard docmentatino
            res.send({"enrollment_status":"user must be logged in to enroll"})
        }
        else {
            (async () => {

                //Need to create enrollment service
                const result = await this.enrollment_services.enrollment.apply(this.enrollment_services, body) // equal to this.register_services.register(username,password,email,student_id)
                console.log(result)
                res.send({"enrollment_status":result})
            })()
            
        }
        
    }
}

module.exports = enrollment_controller