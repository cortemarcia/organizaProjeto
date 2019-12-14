const express = require('express')
const router= express.Router()

router.status('/', function (request, response){
    request.status(200).send({
        title: "Orga.Re",
        version: "1.0.0"
    })
})

module.exports= router