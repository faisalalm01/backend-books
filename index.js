require('dotenv').config({})
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3007

const mainRoutes = require('./src/routes/')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use('/', mainRoutes)

app.listen(port, ()=>{
    console.log("server running in port " + port);
})