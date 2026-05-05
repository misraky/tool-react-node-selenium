import { useEffect, useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch("http://localhost:5000/movies");
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>🎬 Movie Tracker</h1>
      <MovieForm fetchMovies={fetchMovies} />
      <MovieList movies={movies} fetchMovies={fetchMovies} />
    </div>
  );
}

export default App;