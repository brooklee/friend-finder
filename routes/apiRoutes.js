const friends = ("../data/friends");

//=============================ROUTES==========================
//get route for friends
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

app.post("/api/friends",function (req, res) {
//TODO This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

});

