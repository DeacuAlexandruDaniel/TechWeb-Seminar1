const express = require('express')

//console.log(express) - se paseaza librarea ca obiect si sea fiseaza obiectul

const app = express()

app.get('/ping', (req, res) => {
    res.send("pong")
})

app.listen(8080)