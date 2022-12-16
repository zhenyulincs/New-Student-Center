const login_services = require("../services/login_services")
const base_controller = require("./base_controller")

class login_controller extends base_controller {
    constructor() {
        super()
        this.login_services = new login_services()
    }

    async login(req, res) {
        const body = [
            req.body.email,
            req.body.password,
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "login error:",
                    "result": "body cannot be null, need email and password"
                }
            })
        }
        else {
            (async () => {
                let status = null
                const result = await this.login_services.login.apply(this.login_services, body) // equal to this.login_service.login(username,password)
                console.log(result)//debug output
                if (result.status) {
                    status = "success"
                } else {
                    status = "login error:"
                }
                res.send({
                    "status": {
                        "message": status,
                        "result": result.message
                    }
                })
            })()
        }
    }

    async logout(req, res) {
        const body = [
            req.body.token
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "logout error:",
                    "result": "body cannot be null, need token"
                }
            })
        } else {
            (async () => {
                const result = await this.login_services.logout(req.body.token)
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
module.exports = login_controller