var express = require('express')
var router = express.Router()

// read files
var fs = require('fs')
var cryptidData = fs.readFileSync('./cryptids.json')
cryptidData = JSON.parse(cryptidData)

//show(read) (/) GET
router.get('/cryptids', function(req, res) {
    res.render('/cryptids', {myCryptids: cryptidData});
});

// show(read) (/) GET
router.get('/1', (req, res) => {
    res.render('cryptids/1')
})

// create (/) POST
router.post('/cryptids', function(req, res) {
    // add item to dinosaurs array
    cryptidData.push(req.body)
    // save dinosaurs to the data.json file
    fs.writeFileSync('.cryptids.json', JSON.stringify(cryptidData));
    //redirect to the GET /dinosaurs route (index)
    res.redirect('/cryptids');
});

// show(read) (/) GET
router.get('/edit/1', function(req, res) {
    //get an array index from the request
    var cryptidIndex = parseInt(req.params.id)
        res.render('cryptids/edit/1', {myCryptids: cryptidData[cryptidIndex]})
})

module.exports = router
