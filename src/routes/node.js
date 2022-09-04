const express = require('express')
const nodeRouter = express.Router()
const axios = require('axios')

nodeRouter.get('/', async(req, res) => {
    res.render('index', { data : 'Hello Node' })
})

module.exports = nodeRouter 