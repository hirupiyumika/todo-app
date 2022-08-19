const express = require('express')
const app = express()

require('./startup/headers')(app)
require('./startup/routes')(app)
require('./startup/db')()

    // PORT
    const port = 4000;
    const server = app.listen(port, () => console.log(`Listen on port ${port}....`))

    module.exports = server;