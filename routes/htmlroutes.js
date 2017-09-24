const path = require("path");


//=============================Routing========================
module.exports = function(app){

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};