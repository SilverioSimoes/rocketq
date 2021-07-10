const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

// Formato do formulário da modal
// route.post('/room/:room/:question/:action', (req, res) => res.render())

module.exports = route