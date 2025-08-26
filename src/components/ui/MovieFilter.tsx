import "@styles/MovieFilters.css";
import { MovieFilters } from "types";

interface MovieFilterProps {
  movieFilters: MovieFilters,
}

function MovieFilter({}: MovieFilterProps) {

  return (
    <div className="movie-filter">
      Filters
    </div>
  )

}


export default MovieFilter;