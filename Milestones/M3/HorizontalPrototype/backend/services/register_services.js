const base_services = require("./base_services")
const crypto = require('crypto');

class register_services extends base_services {
    constructor() {
        super()
    }
    async register(username, password, email, student_id) {

        try {
            await this.repository.users.findAll({
                where: {
                    email: email
                }
            }).then(function (users) {
                if (users.length != 0) {
                    throw "user exists"
                }
            })
            
            await this.repository.users.create(
                {
                    username: username,
                    email: email,
                    password: password,
                    student_id: student_id,
                    majorId: 1,
                    courseId: 1,
                    token: crypto.randomUUID()
                }
            )
            return "insert success"
        } catch (error) {
            return error
        }
    }

}



module.exports = register_services