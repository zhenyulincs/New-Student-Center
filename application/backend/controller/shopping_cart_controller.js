const shopping_cart_services = require("../services/shopping_cart_services") //Check services
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class shopping_cart_controller extends base_controller{
    constructor() {
        super()
        this.shopping_cart_services = new shopping_cart_services()
        this.login_services = new login_services()
    }
    add_to_cart(req, res) {
        const body = [
            req.body.section_id,
            req.body.token
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "add_to_cart error:",
                    "result": "body cannot be null, need token and section_id"
                }
            })
            return
        }
        else {
            (async () => {
                let status = "success"
                let result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "add_to_cart error:"
                    result = "invalid session token"
                } else {
                    result = await this.shopping_cart_services.add_to_cart(student_id, req.body.section_id)
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

module.exports = shopping_cart_controller