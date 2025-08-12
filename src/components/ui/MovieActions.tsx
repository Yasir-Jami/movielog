// Favorites, Filter by, Add Movie

import AddMovie from "@components/ui/AddMovie";
import MovieSearch from "@components/ui/MovieSearch";
import "@styles/MovieList.css";

function MovieActions() {
  return (
    <div className="movie-actions">
      <MovieSearch />
      <AddMovie />
    </div>
  )
}

export default MovieActions;