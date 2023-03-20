#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"

var argv = minimist(process.argv.slice(2));
var app = express()

// Setting port to 5000 if it is not explicitly given
//const port = argv.port == null ? 5000 : argv.port
const port = argv.port || 5000;

// Parsing requests with url request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {     // The endpoint when nothing is asked
    res.status(200).send("200 OK")
})

app.get('/app/rps/', (req, res) => {     // Null input for rps
    res.status(200).send(rps(null));
})

app.get('/app/rpsls/', (req, res) => {   // Null input for rpsls
    res.status(200).send(rpsls(null));
})

app.get('/app/rps/play/', (req, res) => {   // WIP possibly post
    res.status(200).send(rps(req.query.shot));
})

app.post('/app/rps/play/', (req, res) => {   // WIP possibly post
    res.status(200).send(rps(req.body.shot));
})

app.get('/app/rpsls/play/', (req, res) => {   // WIP possibly post
    res.status(200).send(rpsls(req.query.shot));
})

app.post('/app/rpsls/play/', (req, res) => {   // WIP possibly post
    res.status(200).send(rpsls(req.body.shot));
})

app.get('/app/rps/play/:shot/', (req, res) => {     // User is playing rps
    //let shot = parseInt(req.params.shot)
    res.status(200).send(rps(req.params.shot));
})

app.get('/app/rpsls/play/:shot/', (req, res) => {   // User is playing rpsls
    //let shot = parseInt(req.params.shot)
    res.status(200).send(rpsls(req.params.shot));
})

/*app.use(function(req, res) {        // Return if no endpoint is found
	res.status(404).send("404 NOT FOUND")
})*/

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
