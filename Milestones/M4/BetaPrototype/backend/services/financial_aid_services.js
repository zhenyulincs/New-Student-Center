const base_services = require("./base_services")
const crypto = require('crypto');

class financial_aid_services extends base_services {
    constructor() {
        super()
    }

    async financial_aid(student_id, name) {
        await this.repository.student_records.findOne({
            where: {
                user_fk: student_id,
                type: 1,
                name: name
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }
}



module.exports = financial_aid_services