import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites movies added</h2>
      <p>Start adding movies by clicking on ❤️</p>
    </div>
  );
}

export default Favorites;
