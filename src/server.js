require('dotenv').config()

const Server = require('express')()

const PORT = process.env.EXPRESS_PORT || 3000



Server.listen(PORT, () => {
    console.log(`Server process listening on port ${PORT}`)
})