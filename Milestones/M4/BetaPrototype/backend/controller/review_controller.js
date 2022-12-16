const review_services = require("../services/review_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class review_controller extends base_controller{
    constructor() {
        super()
        this.review_services = new review_services()
        this.login_services = new login_services()
    }

    post_review (req, res) {
        const body = [
            req.body.token,
            req.body.content,
            req.body.rating,
            req.body.difficulty,
            req.body.section_id
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "post_review error:",
                    "result": "body cannot be null"
                }
            })
        }
        else {
            (async () => {
                var result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    result = "invalid session token"
                } else {
                    body[0] = student_id
                    result = await this.review_services.post_review.apply(this.review_services, body)
                    console.log(result)
                }

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

module.exports = review_controller