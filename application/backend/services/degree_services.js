const base_services = require("./base_services")
const { Op } = require("sequelize")

class degree_services extends base_services {
    constructor() {
        super()
    }

    async get_degree(student_id) {
        return await this.repository.degrees.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: this.repository.users,
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
                required: true,
                where: {
                    id: student_id,
                }
            }]
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}



module.exports = degree_services