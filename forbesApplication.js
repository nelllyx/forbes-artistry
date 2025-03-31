const dotenv = require("dotenv");
const express = require('express')
const connectDB = require('./config/database')

dotenv.config({path: './config.env'})

const forbesApp = express()

forbesApp.use(express.json())


connectDB()

const port = process.env.port || 3000

forbesApp.listen(port, ()=>{
    console.log(`App running on port ${port}...`)
})