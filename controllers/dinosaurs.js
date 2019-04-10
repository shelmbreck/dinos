var express = require('express');
var router = express.Router();

// read files
var fs = require('fs');
var dinoData = fs.readFileSync('./dinosaurs.json')
dinoData = JSON.parse(dinoData)

router.get('/dinosaurs', function(req, res) {
    res.render('dinosaurs/index', {myDinos: dinoData});
});

//new (/new) GET
router.get('/new', function(req, res) {
    res.render('dinosaurs/new')
})

router.post('/dinosaurs', function(req, res) {
    // add item to dinosaurs array
    dinoData.push(req.body)
    // save dinosaurs to the data.json file
    fs.writeFileSync('.dinosaurs.json', JSON.stringify(dinoData));
    //redirect to the GET /dinosaurs route (index)
    res.redirect('/dinosaurs');
});

// show (/:id) GET
router.get('/:id', function(req, res) {
    //get an array index from the request
    var dinoIndex = parseInt(req.params.id)
        res.render('/dinosaurs/show', {myDino: dinoData[dinoIndex]})
    })

//show (/edit/:id) GET
router.get('/edit/:id', function(req, res) {
    res.render('/dinosaurs/edit')
})

