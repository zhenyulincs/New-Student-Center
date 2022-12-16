const financial_aid_services = require("../services/financial_aid_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class financial_aid_controller extends base_controller{
    constructor() {
        super()
        this.student_record_services = new student_record_services()
        this.login_services = new login_services()
    }
    financial_aid(req, res) { //Update register

        const body = [
            req.body.id,
            req.body.token, 
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "financial_aid error:",
                    "result": "body cannot be null"
                }
            })
        } 
        else {
            (async () => {
                let status = "success"
                let result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "financial_aid error:"
                    result = "invalid session token"
                } else {
                    //Need to create financial_aid service
                    result = await this.student_record_services.financial_aid.apply(this.financial_aid_services, body) // equal to this.register_services.register(student_id, course_id, token)
                    console.log(result)
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

module.exports = financial_aid_controller