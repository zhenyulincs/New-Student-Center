const degree_services = require("../services/degree_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class degree_controller extends base_controller{
    constructor() {
        super()
        this.login_services = new login_services()
        this.degree_services = new degree_services()
    }
    get_degree(req, res) {
        const body = [
            req.body.token
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_degree error:",
                    "result": "body cannot be null"
                }
            })
            return
        }
        else {
            (async () => {
                let result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    result = "invalid session token"
                } else {
                    result = await this.degree_services.get_degree(student_id)
                    //console.log(result)
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

module.exports = degree_controller