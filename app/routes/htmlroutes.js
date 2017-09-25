const path = require("path");


//=============================Routing========================
module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/survey.html"));
    });
};