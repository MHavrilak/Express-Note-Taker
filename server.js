// Import Express, Path and fs modules
let express = require('express');
let path = require('path');
let fs = require('fs');

// Create Express
let app = express();

app.use(express.static("public"));

// Establish port 
var PORT = process.env.PORT || 3000;


// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
require("./Routes/apiroutes")(app);
require("./Routes/htmlroutes")(app);





app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log('Here is your public page!');
});






app.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
});