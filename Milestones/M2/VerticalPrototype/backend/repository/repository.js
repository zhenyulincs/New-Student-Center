const { Sequelize } = require('sequelize');
const user = require('../model/user');
const major = require('../model/major');
const course = require('../model/course');
const crypto = require('crypto');


class repository {

    constructor() {
        this.sequelize = new Sequelize('postgres://csc648:zrk*vke-qkp-cbc7MXY@csc648group5.postgres.database.azure.com/csc648?sslmode=require')
        this.connect()
        this.build_tables()
        
    }
    build_tables() {
        this.users = this.sequelize.define("users",user)
        this.majors = this.sequelize.define("majors",major)
        this.courses = this.sequelize.define("courses",course)
    }
    create_tables() {
        (async () => {
            await this.sequelize.sync({force: true});
            await this.courses.bulkCreate([
                {
                    name:"English",
                    professor:"Paul",
                    class_number:"1234",
                    location:"Thornton Hall 329",
                    seats:6,
                    waitlist:5,
                    course_attributes:"Lower Division",
                    units:3
                },
                {
                    name:"Math",
                    professor:"Ada",
                    class_number:"1324",
                    location:"Thornton Hall 328",
                    seats:6,
                    waitlist:5,
                    course_attributes:"Lower Division",
                    units:3
                },
                {
                    name:"Chinese",
                    professor:"Michael",
                    class_number:"1432",
                    location:"Thornton Hall 328",
                    seats:6,
                    waitlist:5,
                    course_attributes:"Lower Division",
                    units:3
                }
            ])
            await this.majors.create({
                name: "English"
            })
            await this.users.create({
                username: "Test",
                email:"Test@Test",
                password:"123456789a",
                student_id:"12345678",
                token:crypto.randomUUID()
            })
        })()
        
        
        
        console.log("All models were synchronized successfully.");
    }
    connect() {
        try {
            this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    get_repository() {
        return this.sequelize
    }
}
module.exports = repository;