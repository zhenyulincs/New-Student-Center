const base_services = require("./base_services")
const { Op } = require("sequelize");

class course_service extends base_services{
    constructor() {
        super()
    }
    async search_course(field) {
        
        return await this.repository.courses.findAll({
            // attributes:["password"],
            where:{
                name:{
                    [Op.iLike]: `%${field}%`
                }
                
            },
            raw: true,
            nest: true,
        })
        .then(function (data) {
            if (data.length == 0) {
                return "No Data"
            }
            else {
                let result = JSON.stringify(data,null,2)
                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
            
        })

    }
}
module.exports = course_service