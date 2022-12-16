const course_services = require("../services/course_services")
const professor_services = require("../services/professor_services")
const base_controller = require("./base_controller")
class professor_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
        this.professor_services = new professor_services()
    }

    get_professor(req, res) {
        const body = [
            req.params.id
        ]
        var result = {};
        (async () => {
            if (this.is_contain_null(body)) {
                res.send({
                    "status": {
                        "message": "get_professor error:",
                        "result": "body empty, something's wrong"
                    }
                })
            }
            else {
                result.professor = await this.professor_services.get_professor(req.params.id)
                result.courses = await this.course_services.get_courses_by_professor(req.params.id)
            }
            return result
        })()
        .then((result) => {
            res.send({
                "status": {
                    "message": "success",
                    "result": result
                }
            })
        })
    }
}
module.exports = professor_controller