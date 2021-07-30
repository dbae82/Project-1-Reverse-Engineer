/* External Modules */
const express = require('express');

/* Module instance */
const app = express();

/* Port */
const PORT = 4000


/* Internal Modules */
const controllers = require('./controllers');

/* App Config */
app.set('view engine', 'ejs');

/* middleware */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

/* routes */
// app.use('/', controllers.movie);

// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});