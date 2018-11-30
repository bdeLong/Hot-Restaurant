// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Current Table Array
// =============================================================
const tables = [{
  name: "Sue",
  number: "555-5555",
  email: "sue@coolmail.com",
  uniqueID: 1
},
{
  name: "Mark Techson",
  number: "555-5556",
  email: "mark@coolmail.com",
  uniqueID: 2
},
{
  name: "Quintessa",
  number: "555-5557",
  email: "quintessa@coolmail.com",
  uniqueID: 3
},
{
  name: "Ben",
  number: "555-5558",
  email: "ben@coolmail.com",
  uniqueID: 4
},
{
  name: "Tom",
  number: "555-5559",
  email: "tom@coolmail.com",
  uniqueID: 5
}
];
// Waitlist Array
// =============================================================
const waitlist = [];


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", (req, res) => {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "viewtables.html"));
});

app.get("/api/tables", (req, res) => {
  return res.json(tables);
});

app.get("/api/waitlist", (req, res) => {
  return res.json(waitlist);
});

app.post("/api/tables", (req, res) => {
  var newReservation = req.body;

  console.log(newReservation);
  if (tables.length >= 5) {
    waitlist.push(newReservation)
  }
  else {
    tables.push(newReservation);
  }
  res.json(newReservation);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});