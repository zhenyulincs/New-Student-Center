const register_services = require("../services/register_services")
const base_controller = require("./base_controller")

class register_controller extends base_controller{
    constructor() {
        super()
        this.register_services = new register_services()
    }

    register(req, res) {

        const body = [
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.student_id
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "register error:",
                    "result": "body cannot be null"
                }
            })
        } 
        else if (!this.onlyNumbers(req.body.student_id)) {
            res.send({
                "status": {
                    "message": "register error:",
                    "result": "student id should be a number"
                }
            })
        }
        else {
            (async () => {
                const result = await this.register_services.register.apply(this.register_services, body) // equal to this.register_services.register(username,password,email,student_id)
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

module.exports = register_controller