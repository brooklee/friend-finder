const friends = require ("../data/friends");

//=============================ROUTES==========================

module.exports = function (app) {
    //get route for friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    //post route
    app.post("/api/friends",function (req, res) {
        friends.push(req.body);
    });
};

