import { useState } from "react";

function MovieForm({ fetchMovies }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const addMovie = async () => {
    if (!title || !year) return;

    await fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, year }),
    });

    setTitle("");
    setYear("");
    fetchMovies();
  };

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        width: "300px",
        borderRadius: "10px",
      }}
    >
      <h3>Add Movie</h3>

      <input
        style={{ margin: "5px", padding: "5px", width: "90%" }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        style={{ margin: "5px", padding: "5px", width: "90%" }}
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button
        style={{
          marginTop: "10px",
          padding: "8px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={addMovie}
      >
        Add Movie
      </button>
    </div>
  );
}

export default MovieForm;