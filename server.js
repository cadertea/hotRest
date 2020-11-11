var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var reservations = [];
// ROUTES
// ==============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/reserve", function(req, res) {
     res.json(reservations);
});
// Create New Characters
app.post("/api/reserve", function(req, res) {
    var newReservation = req.body;
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
})