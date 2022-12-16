const course_services = require("../services/course_services")
const professor_services = require("../services/professor_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class search_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
        this.professor_services = new professor_services()
        this.login_services = new login_services()
    }

    search(req, res) {
        const body = [
            req.body.category,
            req.body.field,
            req.body.token
        ]

        var status = "success"
        var result = null;
        (async () => {
            if (this.is_contain_null(body)) {
                status = "search error:"
                result = "Missing important Info, something's wrong"
            }
            else if (req.body.category == "course") {
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "search error:"
                    result = "invalid session token"
                } else {
                    result = await this.course_services.search_course(req.body.field, student_id)
                }
            } else if (req.body.category == "professor") {
                result = await this.professor_services.search_professor(req.body.field)
            } else {
                result = "Currently only supports course, and professor as search categories"
            }
            return result
        })()
        .then((data) => {
            res.send({
                "status": {
                    "message": status,
                    "result": result
                }
            })
        })
    }
}
module.exports = search_controller