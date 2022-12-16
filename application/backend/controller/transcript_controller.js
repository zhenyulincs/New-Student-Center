const transcript_services = require("../services/transcript_services") //Check services
const base_controller = require("./base_controller")
const login_services = require("../services/login_services")
class transcript_controller extends base_controller{
    constructor() {
        super()
        this.transcript_services = new transcript_services()
        this.login_services = new login_services()
    }

    get_transcript(req, res) {
        const body = [
            req.body.token
        ]
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "get_transcript error:",
                    "result": "body cannot be null, need token"
                }
            })
        } 
        else {
            (async () => {
                var status = "success"
                var result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "get_transcript error:"
                    result = "invalid session token"
                } else {
                    result = await this.transcript_services.get_transcript(student_id)
                    console.log(result)
                }
                res.send({
                    "status": {
                        "message": status,
                        "result": result
                    }
                })
            })()
        }
    }

    upload_transcript(req, res) {
        const body = [
            req.body.token,
        ]

        if (this.is_contain_null(body) || !req.files || !req.files.transcript) {/*
            res.send({
                "status": {
                    "message": "upload_transcript error:",
                    "result": "body cannot be null, need token and file"
                }
            })*/
            res.redirect('http://52.146.22.198/merry_christmas/studentrecords?message=' + "body cannot be null, need token and file")
        }
        else {
            (async () => {
                let status = "success"
                let result
                console.log("files: "+req.files.transcript.name)//debug output
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    console.log(student_id)//debug output
                    status = "invalid session token"
                } else {
                    let path = await this.transcript_services.upload_transcript(student_id)
                    //console.log(path)//debug output

                    req.files.transcript.mv(path)
                    result = "added transcript at location: "+path
                }/*
                res.send({
                    "status": {
                        "message": status,
                        "result": result
                    }
                })*/
                res.redirect('http://52.146.22.198/merry_christmas/studentrecords?message=' + status)
            })()
        }
    }
}

module.exports = transcript_controller