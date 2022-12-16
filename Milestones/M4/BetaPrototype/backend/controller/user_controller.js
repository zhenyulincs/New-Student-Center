const user_services = require("../services/user_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class user_controller extends base_controller{
    constructor() {
        super()
        this.user_services = new user_services()
        this.login_services = new login_services()
    }
    get_user(req, res) { //Update register

        const body = [
            req.body.token, 
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_user error:",
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
                    status = "get_user error:"
                    result = "invalid session token"
                } else {
                    result = await this.user_services.get_user(student_id)
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

module.exports = user_controller