const course_services = require("../services/course_services")
const login_services = require("../services/login_services")

const base_controller = require("./base_controller")
class student_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
        this.login_services = new login_services()

    }

    get_student_courses(req, res) {
        const body = [
            req.body.token
        ]

        var status = "success"
        var result = null;
        (async () => {
            if (this.is_contain_null(body)) {
                status = "get_student_courses error:"
                result = "Missing important Info, something's wrong"
            }
            const student_id = await this.login_services.get_userid_from_token(req.body.token)
            if (!student_id) {
                status = "get_student_courses error:"
                result = "invalid session token"
            } else {
                result = await this.course_services.get_courses_by_user(student_id)
            }
            return result
        })()
        .then((data) => {
            res.send({
                "status": {
                    "message": status,
                    "result": data
                }
            })
        })
    }
}
module.exports = student_controller