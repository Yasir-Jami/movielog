import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction } from "react";

interface MovieGridProps {
  currentMovieList: MovieList,
  currentMovieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>,
  setMovieCount: React.Dispatch<SetStateAction<number>>,
}

function filterMovies(
  movieArray: MovieInfo[], 
  filters: MovieFilters, 
  updateMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>): MovieInfo[] {
    const newFilters: MovieFilters = filters;
    console.log("Current search filter:", filters.SearchFilter);
    filters.SearchFilter = "green";
    let filteredMovies = movieArray.filter((movie) => movie.Title.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
    console.log(filteredMovies);
    updateMovieFilters(filters);
    return filteredMovies;
}

function sortMovies(movieArray: MovieInfo[]): MovieInfo[] {

  return sortedList
}


function MovieGrid({
  currentMovieList, 
  currentMovieFilters, 
  setMovieFilters, 
  setMovieCount}: MovieGridProps
) {
  let movieArray = {} as MovieInfo[];
  movieArray = filterMovies(currentMovieList.movies, currentMovieFilters, setMovieFilters);
  movieArray = sortMovies(movieArray);
  const movieCount = movieArray?.length || 0;
  setMovieCount(movieCount);
  
  return (
    <div className="movie-grid">
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...movieArray[i]}/>
      ))}
    </div>
  )
}

export default MovieGrid;