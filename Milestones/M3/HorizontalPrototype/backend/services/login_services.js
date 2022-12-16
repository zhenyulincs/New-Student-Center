const base_services = require("./base_services")
class login_service extends base_services{
    constructor() {
        super()
    }
    async login(email,password) {
        return await this.repository.users.findAll({
            // attributes:["password"],
            where:{
                email:email
            }
        })
        .then(function (correct_password) {
            if (correct_password.length == 0) {
                return false
            }
            else if (correct_password[0].getDataValue("password") == password) {
                return correct_password[0].getDataValue("token")
            }
            else {
                return false
            }
        })

    }
}
module.exports = login_service