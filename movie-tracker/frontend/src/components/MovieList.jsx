function MovieList({ movies, fetchMovies }) {
  const deleteMovie = async (id) => {
    await fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    });
    fetchMovies();
  };

  return (
    <div
      style={{
        margin: "20px auto",
        width: "300px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h3>Movie List</h3>

      {movies.length === 0 && <p>No movies yet</p>}

      {movies.map((m) => (
        <div
          key={m.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
            padding: "5px",
            borderBottom: "1px solid #eee",
          }}
        >
          <span>
            {m.title} ({m.year})
          </span>

          <button
            style={{
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => deleteMovie(m.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;