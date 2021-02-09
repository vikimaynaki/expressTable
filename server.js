const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")
const { resolve } = require("path")
const app = express()
const connectDB = require('./server/database/connection');


dotenv.config({path:'config.env'})
const PORT  = process.env.PORT || 8080

// log for morgan in time
app.use(morgan('tiny'))

// mongo db connection
connectDB();

// parser for to body-parser
app.use(bodyparser.urlencoded({ extended: true}))



// user template-engine
app.set("view engine", "ejs")

// Static file
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

// Load Router
app.use('/', require('./server/routes/router'))

app.listen(PORT, function() {
    console.log(`server is running in http://localhost:${PORT}`)
})