const express = require('express')
require('dotenv').config()

const app = express()
const port = 4580

// Static Files
app.use(express.static('public'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({extended: true})); // New

// Routes
const nodeRouter = require('./src/routes/node')

app.use('/', nodeRouter)
console.log(process.env.TEST)
// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

