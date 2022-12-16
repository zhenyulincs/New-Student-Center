const course_services = require("../services/course_services")

const base_controller = require("./base_controller")
class course_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
    }

    get_course(req, res) {
        const body = [
            req.params.id
        ]

        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_course error:",
                    "result": "body cannot be null"
                }
            })
        } else {
            (async () => {
                const result = await this.course_services.get_course(req.params.id)
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
module.exports = course_controller