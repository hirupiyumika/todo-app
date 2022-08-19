const express = require('express')
const bodyParser = require("body-parser")
const error = require('../middleware/error')
const todos = require('../routes/todos')

module.exports = function(app){

    app.use(bodyParser.json());

    app.use('/api',todos)
    app.use(error)
}