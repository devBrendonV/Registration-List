const bodyParser = require("body-parser");
const port = 3090;
const express = require('express')
const server = express()
const allowCors = require('./cors')


server.use(bodyParser.urlencoded({extended:true}))

server.use(bodyParser.json())
server.use(allowCors)
server.listen(port, function(){
    console.log('Funcionando')
})

module.exports = server