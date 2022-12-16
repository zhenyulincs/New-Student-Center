const base_services = require("./base_services")
const { Op } = require("sequelize")

class shopping_cart_services extends base_services {
    constructor() {
        super()
    }

    async get_shopping_cart(student_id) {
        return await this.repository.enrollments.findAll({
            attributes: {
                include: [
                    [this.repository.sequelize.col('section.course.short_name'), 'short_name']
                ]
            },
            where: {
                user_fk: student_id,
                enrollment_status: 2
            },
            include: [{
                model: this.repository.sections,
                required: true,
                include: [{
                    model: this.repository.courses,
                    required: true,
                }]
            }],
            raw: true,
            nest: false
        })
        .then(function (results) {
            console.log(results)
            if (results.length == 0) {
                return false //nothing in cart
            } else {
                return results //return all sections in shopping cart
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    async add_to_cart(student_id, section_id) {
        var enrollment_status = null
        try {
            await this.repository.enrollments.findAll({
                where: {
                    section_fk: section_id,
                    user_fk: student_id,
                    enrollment_status: {
                        [Op.in]: [0,1,2]
                    },
                },
                raw: true,
                nest: false,
            }).then(async function (results) {
                console.log(results) //debug output
                if ((0 == results.length)) {
                    console.log("adding to cart")
                    enrollment_status = 2
                } else {
                    throw "already enrolled, or already in shopping cart"
                }
            })

            //insert the new enrollment
            await this.repository.enrollments.create(
                {
                    section_fk: section_id,
                    user_fk: student_id,
                    grading_option: 0,
                    enrollment_status: enrollment_status
                }
            )
            return "shopping cart insertion success"
        } catch (error) {
            return error
        }
    }
}



module.exports = shopping_cart_services