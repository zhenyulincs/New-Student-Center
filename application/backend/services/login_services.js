const base_services = require("./base_services")
const crypto = require('crypto')
const bcrypt = require('bcrypt')

class login_service extends base_services{
    constructor() {
        super()
    }

    async login(email, password) {
        let user_id = 0
        try {
            await this.repository.users.findOne({
                // attributes:["password"],
                where: {
                    email: email
                }
            })
            .then(function (results) {
                if (results) {
                    user_id = results.getDataValue("id")
                    return bcrypt.compare(password, results.getDataValue("password"))
                } else {
                    throw "no user found with email: "+email
                }
            })
            .then(function (passwords_match) {
                console.log("bcrypt comparison, passwords match?: " + passwords_match)
                if (!passwords_match) {
                    throw "incorrect password"
                }
            })

            const result = await this.repository.sessions.create({
                token: crypto.randomUUID(),
                user_fk: user_id,
            })
            console.log("token "+result.token)
            return {
                "status": true,
                "message": result.token
            }
        } catch (error) {
            return {
                "status": false,
                "message": error
            }
        }
    }
    //need a logout function
    async logout(token) {
        return await this.repository.sessions.destroy({
            where: {
                token: token
            }
        })
        .then(function () {
            return "logout successful"
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    //converts session token into user_id
    async get_userid_from_token(login_token) {
        const uuid_regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
        if (!uuid_regex.test(login_token)) {
            console.log("token is not a uuid : " + login_token)//debug output
            return false
        }

        return await this.repository.sessions.findOne({
            where: {
                token: login_token,
            }
        })
        .then(function (data) {
            console.log(data)//debug output
            if (!data) {
                console.log("no session with token: "+login_token)//debug output
                return false
            } else {
                return data.user_fk
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
module.exports = login_service