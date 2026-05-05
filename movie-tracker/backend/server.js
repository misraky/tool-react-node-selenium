const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET all movies
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// POST add movie
app.post("/movies", (req, res) => {
  const { title, year } = req.body;

  db.query(
    "INSERT INTO movies (title, year) VALUES (?, ?)",
    [title, year],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, title, year });
    }
  );
});

// DELETE movie
app.delete("/movies/:id", (req, res) => {
  db.query(
    "DELETE FROM movies WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Deleted" });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));