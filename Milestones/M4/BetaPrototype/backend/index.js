const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3003
const home_controller = require('./controller/home_controller')
const calendar_controller = require('./controller/calendar_controller')
const enrollment_controller = require('./controller/enrollment_controller')
const financial_aid_controller = require('./controller/financial_aid_controller')
const login_controller = require('./controller/login_controller')
const notification_controller = require('./controller/notification_controller')
const professor_controller = require('./controller/professor_controller')
const register_controller = require('./controller/register_controller')
const review_controller = require('./controller/review_controller')
const search_controller = require('./controller/search_controller')
const shopping_cart_controller = require('./controller/shopping_cart_controller')
const student_controller = require('./controller/student_controller')
const course_controller = require('./controller/course_controller')
const transcript_controller = require('./controller/transcript_controller')
const health_record_controller = require('./controller/health_record_controller')
const degree_controller = require('./controller/degree_controller')
const user_controller = require('./controller/user_controller')
const repository = require("./repository/repository")
const fileUpload = require('express-fileupload')

new repository().create_tables()
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors({
  origin: '*'
}));
app.use(fileUpload({
    createParentPath: true
}))
app.use('/files', express.static('files'))

router.get('', (req, res) => {
    console.log("success")

    var http = require('http')
    var querystring = require('querystring')

    const options = {
        host: "localhost",
        port: "3003",
        path: "/user",
        method: "POST",
        headers: {
            "Content-type": /*"multipart/form-data"*/"application/x-www-form-urlencoded"
        }
    }
    var req = http.request(options, function (res) {
        var str = ''
        res.on('data', function (chunk) {
            str += chunk
        })
        res.on('end', function () {
            console.log('\n'+str)
        })
    })

    req.write(querystring.stringify({
        //"email": "Test@Test", "password": "123456789a",                    //login test
        //"category": "course", "field": "e", "token": "0b73650a-c456-429e-af8e-2758d2b9de2f"     //search test
        /*"token": "0b73650a-c456-429e-af8e-2758d2b9de2f",    //review test
        "content": "good professor", "rating": "5",
        "difficulty": "4", "section_id": "1",*/
        "token": "0b73650a-c456-429e-af8e-2758d2b9de2f"          //enrollment test, getAllCourses test, logout test, getHealthRecord test, degree test, home test, getTranscript test, notification test
        //"token": "0b73650a-c456-429e-af8e-2758d2b9de2f", "section_id": "3" //addToCart test, drop test, changeGradeOption test
        //"token": "0b73650a-c456-429e-af8e-2758d2b9de2f", "section_id_from": "3", "section_id_to": "1" //swap test
        /*"token": "0b73650a-c456-429e-af8e-2758d2b9de2f", "first_name":"teddy", "last_name":"est",      //createHealthRecord test
        "gender": "0", "date_of_birth": "2022-12-30", "height": "120",
        "weight": "55", "street_address": "apsodifaew",
        "city": "asdifuw", "state": "CA", "country": "aergaerger",
        "zip_code": "11112", "email": "Test@Test", "phone_num": "1231234444",
        "allergies": "aserfg", "ethnicity": "aseg", "mental_illness": "asgasdf"*/
        //"notification_id": 1               //readNotification test
        //"username": "cloun", "password": "imsohappy", "email": "foo@bepis", "student_id": "99999999" //register test
    }))
    req.end()

    //uploadTranscript test
    res.send(`<form action="/uploadTranscript" method="POST" enctype="multipart/form-data">
        <input type="text" name="token"><input type="file" id="myFile" name="transcript"><input type="submit"></form>`)
})
app.use(router)
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  // res.setHeader('Content-Type', 'application/json')
  next();
});
app.post("/home", (req, res) => {
    new home_controller().get_home_page(req, res)
})
app.post("/calendar", (req, res) => {
  new calendar_controller().get_calendar(req, res)
})
app.post("/enrollment",(req,res) => {
  new enrollment_controller().enrollment(req,res)
})
app.post("/drop", (req, res) => {
  new enrollment_controller().drop_course(req, res)
})
app.post("/changeGradeOption", (req, res) => {
    new enrollment_controller().change_grading_option(req, res)
})
app.post("/swap", (req, res) => {
    new enrollment_controller().swap_course(req, res)
})
app.post("/financial_aid",(req,res) => {
  new financial_aid_controller().financial_aid(req,res)
})
app.post('/login',(req,res) => {
  new login_controller().login(req,res)
})
app.post('/logout', (req, res) => {
    new login_controller().logout(req, res)
})
app.post('/notification',(req,res) => {
  new notification_controller().notification(req,res) 
})
app.post('/readNotification', (req, res) => {
    new notification_controller().read_notification(req, res)
})
app.get('/professor/:id(\\d+)', (req, res) => {
  new professor_controller().get_professor(req, res)
})
app.post('/register',(req,res) => {
  new register_controller().register(req,res)
})
app.post("/review", (req, res) => {
  new review_controller().post_review(req, res)
})
app.post("/search",(req,res) => {
  new search_controller().search(req,res)
})
app.post("/addToCart",(req,res) => {
  new shopping_cart_controller().add_to_cart(req,res)
})
app.post("/getTranscript",(req,res) => {
  new transcript_controller().get_transcript(req,res)
})
app.post("/uploadTranscript", (req, res) => {
    new transcript_controller().upload_transcript(req, res)
})
app.post("/getHealthRecord", (req, res) => {
  new health_record_controller().get_health_record(req, res)
})
app.post("/createHealthRecord", (req, res) => {
  new health_record_controller().create_health_record(req, res)
})
app.post("/getAllCourses",(req,res) => {
  new student_controller().get_student_courses(req,res)
})
app.get("/course/:id(\\d+)", (req, res) => {
  new course_controller().get_course(req, res)
})
app.post("/degree", (req, res) => {
    new degree_controller().get_degree(req, res)
})
app.post("/user", (req, res) => {
    new user_controller().get_user(req, res)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})