import "@styles/MovieListContainer.css"
import "@styles/MovieCard.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction, useEffect } from "react";
import { checkIfFiltered, clearAllFilters } from "@components/utils/MovieFilterUtils";
import { useMovieSearchRef } from "@components/contexts/MovieSearchContext";
import { Search } from "lucide-react";

interface MovieGridProps {
  currentMovieList: MovieList,
  currentMovieCount: number,
  setMovieCount: React.Dispatch<SetStateAction<number>>,
  currentMovieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>,
  currentMovieSortMethod: MovieSortMethod,
}

function filterMovies(
  movieArray: MovieInfo[], 
  filters: MovieFilters, 
  ): MovieInfo[] {
    //logger.log("Current search filter:", filters.SearchFilter);
    let filteredMovies = movieArray.filter((movie) => movie.movieMeta.Title.toLowerCase().includes(filters.SearchFilter.toLowerCase()));
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
  
  if (sortMethod = MovieSortMethod.Alphanumerically) {
    logger.log(`Using ${sortMethod}`);
  }

  else if (sortMethod = MovieSortMethod.Rating) { 
    logger.log(`Using ${sortMethod}`);
  }

  return sortedMovies;
}

function MovieGrid({
  currentMovieList, 
  setMovieCount, 
  currentMovieFilters, 
  setMovieFilters,
  currentMovieSortMethod}: MovieGridProps
) {
  let movieArray: MovieInfo[] = currentMovieList?.movies || [];
    
  if (movieArray.length != 0 && checkIfFiltered(currentMovieFilters)) {
    movieArray = filterMovies(movieArray, currentMovieFilters);
  } 
  if (currentMovieSortMethod != MovieSortMethod.Default) {
    movieArray = sortMovies(movieArray, currentMovieSortMethod);
  }

  const movieCount = movieArray?.length ?? 0;
  useEffect(() => {
    setMovieCount(movieCount);
  }, [currentMovieList]);

  const movieSearchRef = useMovieSearchRef();

  const handleFocusMovieSearch = () => {
    movieSearchRef?.current?.focus();
  }

  function handleDeleteMovie(id: string) {
    console.log(`Movie with id ${id} deleted`);
    // Call API
  }

  function handleFavoriteMovie(id: string) {
    console.log(`Movie with id ${id} favorited`);
    // Call API
  }

  let movieGridContent: React.JSX.Element = <div 
    className="movie-grid"
    onChange={() => {setMovieCount(movieCount)}}>
      {movieArray.map((movie, i) => (
          <MovieCard 
          key={i} 
          movie={movie}
          handleFavoriteMovie={handleFavoriteMovie}
          handleDeleteMovie={handleDeleteMovie}
          />
      ))}
    </div>

    if (movieCount == 0) {
      if (checkIfFiltered(currentMovieFilters)) {
        movieGridContent = (
        <div className="no-movies">
          <div className="no-movies-wrapper">
            <Search className="no-movies-icon" size={64}></Search>
            <h3 className="no-movies-text">
              No movies match your current filters.
            </h3>
            <button 
            className="no-movies-search-button" 
            onClick={() => {setMovieFilters(clearAllFilters(currentMovieFilters))}}>Clear Filters</button>
          </div>
        </div>
        )
      
      }
      else {
        movieGridContent = (
        <div className="no-movies">
          <div className="no-movies-wrapper">
            <h3 className="no-movies-text">
              Start your list by adding a movie
            </h3>
            <button 
            className="no-movies-clear-filters-button" 
            onClick={handleFocusMovieSearch}>Search</button>
          </div>
        </div>
      )}
    }
  
  return (
    <>
    {movieGridContent}
    </>
  )
}

export default MovieGrid;