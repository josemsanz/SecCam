require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'

// Server setup
const Server = express()
const PORT = process.env.EXPRESS_PORT || 3000

Server.use('*', (req, res, next) => {
    console.log(`Request URL: ${req.url}\n\tDate: ${new Date().toString()}`)
    next()
})

// BodyParser setup
Server.use(bodyParser.urlencoded({ extended: true}))
Server.use(bodyParser.json())

// Setup static file serving route.
Server.use('/static', express.static('public'))




// Basic routing
Server.get('/', (req, res) => {
    console.log('\tHome Page.')
    res.status(200).send('<h1>This is the Home Page.</h1>')
})

Server.all('*', (req, res) => {
    console.log('\tUnrecognized Endpoint.')
    res.status(404).end()
})


Server.listen(PORT, () => {
    console.log(`Server process listening on port ${PORT}`)
})