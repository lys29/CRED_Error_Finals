const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");

// middleware - FORM urlecondded
app.use(bodyParser.urlencoded({ extended: false }));

// middleware - parse JSON
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5291", //sql password
  database: "Cpet12_crederrors", //use database name
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected to our Database: Cpet12_crederrors!");
});

// Add Data
app.post("/", (req, res) => {
  // insert query to database
  connection.query(
    "INSERT IGNORE INTO cred_errors_finaltable (Fname, Lname, Email, Address, Pnumber, Alumni, Reason) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [req.body.Fname, req.body.Lname, req.body.Email, req.body.Address, req.body.Pnumber, req.body.Alumni, req.body.Reason],
    (err, results) => {
      if (results?.affectedRows > 0) {
        res.json({ message: "New data has been added to the database!" });
      } else {
        res.json({ message: err });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});