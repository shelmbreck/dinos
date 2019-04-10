var express = require('express')
var ejsLayouts = require('express-ejs-layouts')

var app = express()

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/', express.static('public'))

app.use(express.urlencoded({ extended: false}))

app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.use('/cryptids', require('./controllers/cryptids'))

app.get('/', function(req, res) {
    res.send('home')
})


app.listen(3000, function () {
    console.log("You are here")
})