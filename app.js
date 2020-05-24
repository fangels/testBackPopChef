require('module-alias/register')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const { apiPort, } = require('./config/config.json')
const routerManager = require('./routes/index')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false, }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(routerManager)

const server = app.listen(apiPort, () => {
  console.log(`Server is listening on ${server.address().port}`)
})

module.exports = server
