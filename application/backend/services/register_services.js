const base_services = require("./base_services")
const crypto = require('crypto');
const bcrypt = require('bcrypt');

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
                    password: await bcrypt.hash(password, 13),
                    student_id: student_id,
                    last_term_registered: this.repository.sequelize.fn('now'),
                    graduation_status: 0,
                }
            )
            return "insert success"
        } catch (error) {
            return error
        }
    }

}



module.exports = register_services