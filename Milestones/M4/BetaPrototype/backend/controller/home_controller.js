const course_services = require("../services/course_services")
const degree_services = require("../services/degree_services")
const calendar_services = require("../services/calendar_services")
const login_services = require("../services/login_services")
//TODO: include the important dates using the calendar controller
const base_controller = require("./base_controller")
class home_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
        this.degree_services = new degree_services()
        this.calendar_services = new calendar_services()
        this.login_services = new login_services()
    }

    get_home_page(req, res) {
        const body = [
            req.body.token, 
        ]

        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_home_page error:",
                    "result": "body cannot be null"
                }
            })
        }
        else {
            (async () => {
                var status = "success"
                var result = {}

                const student_id = await this.login_services.get_userid_from_token(req.body.token)

                if (!student_id) {
                    status = "get_home_page error:"
                    result = "invalid session token"
                } else {
                    result.courses = await this.course_services.get_courses_by_user(student_id)
                    result.degree = await this.degree_services.get_degree(student_id)
                    result.calendar = await this.calendar_services.get_calendar()
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
}

module.exports = home_controller