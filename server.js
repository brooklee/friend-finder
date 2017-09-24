// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");

constapp = express;

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT.8081

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.usebodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//==============================ROUTER======================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//===========================Listener======================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
