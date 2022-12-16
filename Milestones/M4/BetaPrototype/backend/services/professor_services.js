const base_services = require("./base_services")
const { Op } = require("sequelize");

class professor_service extends base_services{
    constructor() {
        super()
    }

    async search_professor(field) {
        return await this.repository.professors.findAll({
            distinct: true,
            attributes: {
                include: [
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."rating")
                        FROM "reviews"
                        WHERE "reviews"."professor_fk" = "professors"."id")`), 'rating'],
                    [this.repository.sequelize.literal(
                        `(SELECT AVG("reviews"."difficulty")
                        FROM "reviews"
                        WHERE "reviews"."professor_fk" = "professors"."id")`), 'difficulty'],
                ],
                exclude: ["createdAt", "updatedAt"
                ]
            },
            include: [{
                model: this.repository.reviews,
                required: false,
            }],
            where: {
                name: { [Op.iLike]: `%${field}%` },
            }
        })
        .then(function (data) {
            if (data.length == 0) {
                return "No Data"
            }
            else {
                let result = JSON.stringify(data, null, 2)

                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    async get_professor(professor_id) {
        return await this.repository.professors.findByPk(professor_id, {
            attributes: {
                include: [
                    [this.repository.sequelize.fn('avg', this.repository.sequelize.col('reviews.rating')), 'rating'],
                    [this.repository.sequelize.fn('avg', this.repository.sequelize.col('reviews.difficulty')), 'difficulty']
                ],
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: this.repository.reviews,
                attributes: [],
                required: false,
            }],
            group: ['professors.id'],
            raw: true,
            nest: false,
        })
        .then(function (data) {
            console.log(data)//debug output
            if (data.length == 0) {
                return "No Data"
            }
            else {
                let result = JSON.stringify(data, null, 2)

                delete result['createdAt']
                delete result['updatedAt']
                return JSON.parse(result)
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
module.exports = professor_service