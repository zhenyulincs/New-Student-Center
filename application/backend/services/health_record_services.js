const base_services = require("./base_services")
const crypto = require('crypto');

class health_record_services extends base_services {
    constructor() {
        super()
    }

    async get_health_record(student_id) {
        return await this.repository.health_records.findOne({
            where: {
                user_fk: student_id,
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    async create_health_record(student_id, first_name, last_name,
            gender, date_of_birth, height, weight, street_address, city, state,
            country, zip_code, email, phone_num, allergies, ethnicity, mental_illness) {
        let record_exists
        await this.repository.health_records.findOne({
            where: {
                user_fk: student_id,
            }
        })
        .then(function (result) {
            if (!result) {
                record_exists = false
            } else {
                record_exists = true
            }
        })
        .catch((e) => {
            console.log(e)
        })

        if (record_exists) {
            await this.repository.health_records.update({
                first_name:     first_name,
                last_name:      last_name,
                gender:         gender,
                date_of_birth:  date_of_birth,
                height:         height,
                weight:         weight,
                street_address: street_address,
                city:           city,
                state:          state,
                country:        country,
                zip_code:       zip_code,
                email:          email,
                phone_num:      phone_num,
                allergies:      allergies,
                ethnicity:      ethnicity,
                mental_illness: mental_illness
            }, {
                where: {
                    user_fk: student_id
                }
            })
        } else {
            await this.repository.health_records.create({
                first_name:     first_name,
                last_name:      last_name,
                gender:         gender,
                date_of_birth:  date_of_birth,
                height:         height,
                weight:         weight,
                street_address: street_address,
                city:           city,
                state:          state,
                country:        country,
                zip_code:       zip_code,
                email:          email,
                phone_num:      phone_num,
                allergies:      allergies,
                ethnicity:      ethnicity,
                mental_illness: mental_illness,
                user_fk:        student_id
            })
        }
        return "health record successfully created/updated"
    }
}



module.exports = health_record_services