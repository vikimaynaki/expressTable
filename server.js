const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")
const { resolve } = require("path")
const app = express()

dotenv.config({path:'config.env'})
const PORT  = process.env.PORT || 8080

// log for morgan in time
app.use(morgan('tiny'))

// parser for to body-parser
app.use(bodyparser.urlencoded({ extended: true}))

// user template-engine
app.set("view engine", "ejs")

// Static file
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

app.get('/', function(req, res) {
    res.render('index')
})  

app.listen(PORT, function() {
    console.log(`server is running in http://localhost:${PORT}`)
})