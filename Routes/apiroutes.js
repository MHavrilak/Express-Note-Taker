let notes = require('../db/db.json')
let fs = require('fs');
let path = require('path');

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        res.json(notes);
    })
    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
       if(notes.length == 0){
           newNote.id = 1
       }else newNote.id = notes[notes.length - 1].id + 1;

        console.log(newNote);
    notes.push(newNote)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
        res.send(newNote);
    });

    app.delete("/api/notes/:id", (req, res) => {
        var id = req.params.id;
       notes = notes.filter(function(note) {
            if(id == note.id){
                return false;
            }else return true;
        })
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
        res.json(notes);
    })
    
};


