const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3003
const register_controller = require('./controller/register_controller')
const login_controller = require('./controller/login_controller')
const search_controller = require('./controller/search_controller')
const repository = require("./repository/repository")
new repository().create_tables()
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

router.get('', (req, res) => {
    console.log("success")

    var http = require('http')
    var querystring = require('querystring')

    const options = {
        host: "localhost",
        port: "3003",
        path: "/search",
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
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

    req.write(querystring.stringify({"category": "course", "field": "math"}))
    req.end()

  res.send('Hello World!')
})
app.use(router)
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  // res.setHeader('Content-Type', 'application/json')
  next();
});
app.post('/register',(req,res) => {
  new register_controller().register(req,res)
})
app.post("/enrollment",(req,res) => {
  new enrollment_controller().search(req,res)
})
app.post('/login',(req,res) => {
  new login_controller().login(req,res)
})
app.post('/notification',(req,res) => {
  new notification_controller().login(req,res)
})
app.post("/search",(req,res) => {
  new search_controller().search(req,res)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})