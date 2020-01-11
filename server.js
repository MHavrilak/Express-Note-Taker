// Import Express, Path and fs modules
let express = require('express');
let path = require('path');
let fs = require('fs');

// Create Express
let app = new express();

// Establish port 
var PORT = process.env.PORT || 8000;

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
    console.log('Here is your notes page!');
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log('Here is your public page!');
});


app.post("/notes", (req, res) => {
    var newNote = req.body;
    console.log(newNote);

    res.send(newNote);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});