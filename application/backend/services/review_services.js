const base_services = require("./base_services")
const crypto = require('crypto');

class review_services extends base_services {
    constructor() {
        super()
    }

    async post_review(student_id, content, rating, difficulty, section_id) {
        var enrollment_id = 0
        var professor_id = 0
        try {
            await this.repository.enrollments.findOne({
                attributes: {
                    include: [
                        [this.repository.sequelize.col("review.professor_fk"), "review"],
                        [this.repository.sequelize.col("section.professor_fk"), "professor"],
                    ]
                },
                include: [{
                    model: this.repository.reviews,
                    attributes: [],
                    required: false
                }, {
                    model: this.repository.sections,
                    attributes: [],
                    required: true,
                }],
                where: {
                    section_fk: section_id,
                    user_fk: student_id,
                    enrollment_status: 4
                },
                raw: true,
                nest: false,
            }).then(function (results) {
                console.log(results)
                if (!results || !results.grade) {
                    throw "you may only review sections you've completed"
                } else if (!results.review) {
                    console.log("existing review not found")
                    enrollment_id = results.id
                    professor_id = results.professor
                } else {
                    throw "you have already reviewed this section"
                }
            })

            //insert the new review
            await this.repository.reviews.create(
                {
                    enrollment_fk: enrollment_id,
                    professor_fk: professor_id,
                    content: content,
                    rating: rating,
                    difficulty: difficulty
                }
            )
            return "review insertion success"
        } catch (error) {
            return error
        }
    }

}



module.exports = review_services