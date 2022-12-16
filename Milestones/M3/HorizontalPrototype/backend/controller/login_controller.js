const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class login_controller extends base_controller{
    constructor() {
        super()
        this.login_services = new login_services()
    }
    async login(req,res) {
        const body = [
            req.body.email,
            req.body.password,
        ]
        if (this.is_contain_null(body)) {
            res.send({"login_status":"password/email can'be null"})
            
        } 
        else {
            (async () => {
                const result = await this.login_services.login.apply(this.login_services,body) // equal to this.login_service.login(username,password)
                
                res.send({"login_status":result})
            })()
        }

    }
}
module.exports = login_controller