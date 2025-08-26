import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction } from "react";

interface MovieGridProps {
  currentMovieList: MovieList,
  currentMovieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>;
}

function filterMovies(
  movieArray: MovieInfo[], 
  filters: MovieFilters, 
  updateMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>): MovieInfo[] {
  console.log("Current search filter:", filters.SearchFilter);
  filters.SearchFilter = "green";
  let filteredList = movieArray.filter((movie) => movie.Title.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
  console.log(filteredList);
  updateMovieFilters(filters);

  return filteredList;
}

/*
function sortMovies(movieArray: MovieInfo[]): MovieInfo[] {

  return sortedList
}
*/

function MovieGrid({currentMovieList, currentMovieFilters, setMovieFilters}: MovieGridProps) {
  const filteredMovies = filterMovies(currentMovieList.movies, currentMovieFilters, setMovieFilters);
  const movieCount = filteredMovies?.length || 0;
  console.log(movieCount);

  // TODO Need to update moviefilters and movie list to ensure the correct count

  //movieArray = currentMovieList.movies;
  // Filter before showing
  
  return (
    <div className="movie-grid">
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...filteredMovies[i]}/>
      ))}
    </div>
  )

}

export default MovieGrid;