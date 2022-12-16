const health_record_services = require("../services/health_record_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class health_record_controller extends base_controller{
    constructor() {
        super()
        this.health_record_services = new health_record_services()
        this.login_services = new login_services()
    }

    get_health_record(req, res) {
        const body = [
            req.body.token
        ]

        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_health_record error:",
                    "result": "body cannot be null"
                }
            })
        } else {
            (async () => {
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                var status
                var result
                if (!student_id) {
                    status = "get_health_record error:"
                    result = "invalid session token"
                } else {
                    status = "success"
                    result = await this.health_record_services.get_health_record(student_id)
                    if (!result) {
                        result = "no health record found"
                    }
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
    create_health_record(req, res) {
        const body = [
            req.body.token,
            req.body.first_name,
            req.body.last_name,
            req.body.gender,
            req.body.date_of_birth,
            req.body.height,
            req.body.weight,
            req.body.street_address,
            req.body.city,
            req.body.state,
            req.body.country,
            req.body.zip_code,
            req.body.email,
            req.body.phone_num,
            req.body.allergies,
            req.body.ethnicity,
            req.body.mental_illness,
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "create_health_record error:",
                    "result": "missing body information"
                }
            })
        } 
        else {
            (async () => {
                let status = "success"
                let result = null
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "create_health_record error:"
                    result = "invalid session token"
                } else {
                    body[0] = student_id
                    result = await this.health_record_services.create_health_record.apply(this.health_record_services, body)
                }
                res.send({
                    "status": {
                        "message": status,
                        "result": result
                    }
                })
            })()
            .catch((e) => {
                console.log(e)
            })
            
        }
        
    }
}

module.exports = health_record_controller