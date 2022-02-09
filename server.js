require('dotenv').config({path: './config.env'})

const express = require('express')
const cors = require('cors')

//? Local Imports
const errorHandler = require('./middleware/error')
const db = require('./config/db')

const app = express()
db()

app.use(express.json())
app.use(cors())
app.use(errorHandler)
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 2022

const server = app.listen(PORT, () => console.log(`Server is running @ ${PORT}`))

process.on('unhandledRejection',(err) =>{
    console.error(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
