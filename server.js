// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8081;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//===========================Listener======================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


//==============================ROUTER======================================
// html routes
require('./routes/htmlRoutes.js')(app);
// api routes
require('./routes/apiRoutes.js')(app);
