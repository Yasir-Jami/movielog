import "@styles/MovieFilters.css";
import { MovieFilters } from "types";

interface MovieFilterProps {
  movieFilters: MovieFilters,
}

function MovieFilter({movieFilters}: MovieFilterProps) {
  console.log(movieFilters.GenreFilter);
  Object.values(movieFilters.GenreFilter).forEach(genre => {
    logger.log(genre.name);
    logger.log(genre.filterApplied);
  })

  return (
    <div className="movie-filters">
      {/*
      <label htmlFor="ActionGenre">Action</label>
      <input type="checkbox" id="ActionGenre" name="Action"></input>
       */}
    </div>
  )

}


export default MovieFilter;