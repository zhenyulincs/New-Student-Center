const base_services = require("./base_services")
const crypto = require('crypto');

class transcript_services extends base_services {
    constructor() {
        super()
    }

    async get_transcript(student_id) {
        return await this.repository.transcript_records.findOne({
            where: {
                user_fk: student_id,
            },
            order: [['createdAt', 'desc']],
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    async upload_transcript(student_id) {
        let previous_transcript_id //get the last inserted id to auto increment the identifier in the name of the file
        await this.repository.transcript_records.findOne({
            order: [['id', 'desc']],
        })
        .then(function (result) {
            console.log(result)
            previous_transcript_id = result.id
        })
        .catch((e) => {
            console.log(e)
        })
        //console.log("last inserted transcript id: "+previous_transcript_id)//debug output
        let path = './files/uploads/transcript_' + (previous_transcript_id+1) + '.pdf'
        await this.repository.transcript_records.create({
            user_fk: student_id,
            type: 1,
            path: path
        })
        return path
    }
}

module.exports = transcript_services