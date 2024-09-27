require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

//creating server instance
const siServer=express()

//configuring cors into server
siServer.use(cors())

//configuring json conversion on server
siServer.use(express.json())

//configure routes to server
siServer.use(router)

const PORT=3000

//calling listen method to implement listen mode for server to run
siServer.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
})

//setting response for base_url get request
siServer.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request Hit successfully</h1>")
})