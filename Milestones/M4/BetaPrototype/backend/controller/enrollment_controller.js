const enrollment_services = require("../services/enrollment_services")
const shopping_cart_services = require("../services/shopping_cart_services")
const login_services = require("../services/login_services")
const base_controller = require("./base_controller")
class enrollment_controller extends base_controller{
    constructor() {
        super()
        this.enrollment_services = new enrollment_services()
        this.shopping_cart_services = new shopping_cart_services()
        this.login_services = new login_services()
    }

    enrollment(req, res) {
        const body = [
            req.body.token, 
        ]

        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "enrollment error:",
                    "result": "body cannot be null"
                }
            })
        }
        else {
            (async () => {
                var status = "success"
                var results = []

                const student_id = await this.login_services.get_userid_from_token(req.body.token)

                if (!student_id) {
                    status = "enrollment error:"
                    results = "invalid session token"
                } else {
                    const sections_in_cart = await this.shopping_cart_services.get_shopping_cart(student_id)
                    if (!sections_in_cart) {
                        status = "enrollment error:"
                        results = "nothing found in shopping cart"
                    } else {
                        for (let i = 0; i < sections_in_cart.length; i++) {
                            results[i] = {}
                            const already_enrolled_section = await this.enrollment_services.check_if_already_enrolled(student_id, sections_in_cart[i].section_fk)
                            const unmet_prerequisites = await this.enrollment_services.check_prerequisites(student_id, sections_in_cart[i].section_fk)
                            const enrollment_status = await this.enrollment_services.check_capacity(sections_in_cart[i].section_fk)

                            if (already_enrolled_section) { //check if already enrolled in course
                                results[i].message = "already enrolled in " + sections_in_cart[i].short_name + " section: "
                                results[i].value = already_enrolled_section.section_number
                            } else if (unmet_prerequisites.length != 0) { //check if all prerequisites are met
                                results[i].message = sections_in_cart[i].short_name + " missing prerequisites:"
                                results[i].value = []
                                for (let j = 0; j < unmet_prerequisites.length; j++) {
                                    results[i].value[j] = unmet_prerequisites[j].short_name
                                }
                            } else if (enrollment_status < 0) { //check if class is full
                                results[i].message = "class is full"
                                results[i].value = sections_in_cart[i].short_name
                            } else {
                                await this.enrollment_services.enroll(student_id, sections_in_cart[i].section_fk, enrollment_status)
                                results[i].message = "enrolled successfully"
                                results[i].value = sections_in_cart[i].short_name
                            }
                        }
                    }
                }
                res.send({
                    "status": {
                        "message": status,
                        "result": results
                    }
                })
            })()   
        }
    }

    drop_course(req, res) {
        const body = [
            req.body.section_id,
            req.body.token,
        ]

        var status = true
        var result = null
        if (this.is_contain_null(body)) {
            status = "drop_course error:"
            result = "missing body information"
        }
        else {
            (async () => {
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "drop_course error:"
                    result = "invalid session token"
                } else {
                    status = "success"
                    result = await this.enrollment_services.drop(student_id, req.body.section_id)
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

    change_grading_option(req, res) {
        const body = [
            req.body.section_id,
            req.body.token,
        ]

        var status
        var result = null
        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "change_grading_option error:",
                    "result": "body cannot be null"
                }
            })
        }
        else {
            (async () => {
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "change_grade_option error:"
                    result = "invalid session token"
                } else {
                    status = "success"
                    result = await this.enrollment_services.change_grading_option(student_id, req.body.section_id)
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

    swap_course(req, res) {
        const body = [
            req.body.token,
            req.body.section_id_from,
            req.body.section_id_to,
        ]

        if (this.is_contain_null(body)) {
            res.send({
                "status": {
                    "message": "swap_course error:",
                    "result": "body cannot be null"
                }
            })
        } else {
            (async () => {
                let status
                let result
                const student_id = await this.login_services.get_userid_from_token(req.body.token)
                if (!student_id) {
                    status = "swap_course error:"
                    result = "invalid session token"
                } else {
                    status = "success"
                    result = await this.enrollment_services.swap_course(student_id, req.body.section_id_from, req.body.section_id_to)
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
}

module.exports = enrollment_controller