const course_services = require("../services/course_services")
const base_controller = require("./base_controller")
class search_controller extends base_controller{
    constructor() {
        super()
        this.course_services = new course_services()
    }
    search(req, res) {
        const body = [
            req.body.category,
            req.body.field,
        ]
        if (this.is_contain_null(body)) {
            res.send({"search_status":{
                "status":false,
                "result":""
            }})
        } 
        else if (req.body.category == "course") {
            
            (async () => {
                const result = await this.course_services.search_course(req.body.field,) 
                if (result == "No Data") {
                    res.send({"search_status":{
                        "status":false,
                        "result":result
                    }})
                } else {
                    res.send({"search_status":{
                        "status":true,
                        "result":result
                    }})
                }
                
            })()
        }
        else {
            res.send({"search_status":{
                "status":false,
                "result":"Currently only support search course"
            }})
        }
    }
}
module.exports = search_controller