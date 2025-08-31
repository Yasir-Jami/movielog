import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction, useEffect } from "react";
import { checkIfFiltered, applyGenreFilters } from "@components/utils/MovieFilterUtils";
import MovieFilter from "./MovieFilter";

interface MovieGridProps {
  currentMovieList: MovieList,
  currentMovieCount: number,
  setMovieCount: React.Dispatch<SetStateAction<number>>,
  currentMovieFilters: MovieFilters,
  currentMovieSortMethod: MovieSortMethod,
}

function filterMovies(
  movieArray: MovieInfo[], 
  filters: MovieFilters, 
  ): MovieInfo[] {
    //logger.log("Current search filter:", filters.SearchFilter);
    let filteredMovies = movieArray.filter((movie) => movie.Title.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
    /*
    if (filters.FilteredByGenre) {
      filteredMovies = applyGenreFilters(movieArray, filters);
    }
    */
    
    //let filteredMovies = movieArray.filter((movie) => movie.Genre?.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
    return filteredMovies;
}

function sortMovies(movieArray: MovieInfo[], sortMethod: MovieSortMethod): MovieInfo[] {
  let sortedMovies = movieArray;

  /*
  if (sortMethod = MovieSortMethod.Alphanumerically) {

  }

  else if (sortMethod = MovieSortMethod.Rating) { 

  }
  */

  return sortedMovies;
}

function MovieGrid({
  currentMovieList, 
  setMovieCount, 
  currentMovieFilters, 
  currentMovieSortMethod}: MovieGridProps
) {
  let movieArray = currentMovieList?.movies || [];
  const isFiltered = checkIfFiltered(currentMovieFilters);
  
  if (isFiltered && movieArray.length != 0) {
    movieArray = filterMovies(movieArray, currentMovieFilters);
  } 
  if (currentMovieSortMethod != MovieSortMethod.Default) {
    movieArray = sortMovies(movieArray, currentMovieSortMethod);
  }

  const movieCount = movieArray?.length || 0;
  useEffect(() => {
    setMovieCount(movieCount);
  }, [movieCount])
  
  return (
    <div className="movie-grid"
    onChange={() => {setMovieCount(movieCount)}}>
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...movieArray[i]}/>
      ))}
    </div>
  )
}

export default MovieGrid;