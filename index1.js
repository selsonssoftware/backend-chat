
import db from "./lib/db1.js";
import express from "express";
import User from "./model/User.js";
 

const app = express();
app.use(express.json());
 
app.get("/test", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
      if (err) return res.status(500).send(err);
      res.send(rows);
    });
  });

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
