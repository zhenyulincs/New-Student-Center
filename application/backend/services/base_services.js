const repository = require("../repository/repository")

class base_services {
    constructor() {
        this.repository = new repository()
    }

}

module.exports = base_services