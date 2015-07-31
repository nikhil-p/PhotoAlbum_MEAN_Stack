// server routes ===========================================================
// handle things like api calls
// authentication routes

// frontend routes =========================================================
// route to handle all angular requests


// grab the nerd model we just created
var Nerd = require('./models/nerd');

var Photo = require('./models/photo');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function (req, res) {

        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });


    // create a new user called chris
    var testPhoto = new Photo({
        title: 'Chris',
        date: '12/12/2012',
        category: 'Family',
        comments: 'Test comment'
    });


    // sample api route
    app.post('/api/addPhoto', function (req, res) {
        // use mongoose to get all nerds in the database
        photo.save(function (err) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            console.log("data saved");
            //
            //res.json(nerds); // return all nerds in JSON format
        });
    });

    // sample api route
    app.get('/api/addPhoto', function (req, res) {
        console.log("comign ehre");
        // use mongoose to get all nerds in the database
        testPhoto.save(function (err) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            console.log("data saved");
            //
            //res.json(nerds); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};