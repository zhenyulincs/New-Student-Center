const base_services = require("./base_services")
const { Op } = require("sequelize")

class user_services extends base_services {
    constructor() {
        super()
    }

    async get_user(student_id) {
        return await this.repository.users.findOne({
            attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
            include: [{
                model: this.repository.degrees,
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }],
            where: {
                id: student_id
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}



module.exports = user_services