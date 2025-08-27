import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction, useEffect } from "react";

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
    //console.log("Current search filter:", filters.SearchFilter);
    let filteredMovies = movieArray.filter((movie) => movie.Title.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
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
  currentMovieCount,
  setMovieCount, 
  currentMovieFilters, 
  currentMovieSortMethod}: MovieGridProps
) {
  let movieArray = {} as MovieInfo[];
  movieArray = filterMovies(currentMovieList.movies, currentMovieFilters);
  if (currentMovieSortMethod != MovieSortMethod.Default) {
    console.log(currentMovieSortMethod);
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