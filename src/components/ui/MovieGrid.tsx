import "@styles/MovieListContainer.css"
import "@styles/MovieCard.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieCardProps, MovieFilters, MovieSortMethod, AddMovieModalDisplay } from "types";
import { SetStateAction, useEffect } from "react";
import { checkIfFiltered } from "@components/utils/MovieFilterUtils";
import { Plus } from "lucide-react";

interface MovieGridProps {
  currentMovieList: MovieList,
  currentMovieCount: number,
  setMovieCount: React.Dispatch<SetStateAction<number>>,
  currentMovieFilters: MovieFilters,
  currentMovieSortMethod: MovieSortMethod,
  setAddMovieModalVisibility: React.Dispatch<SetStateAction<AddMovieModalDisplay>>,
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
  currentMovieSortMethod,
  setAddMovieModalVisibility}: MovieGridProps
) {
  let movieArray = currentMovieList?.movies || [];
    
  if (movieArray.length != 0 && checkIfFiltered(currentMovieFilters)) {
    movieArray = filterMovies(movieArray, currentMovieFilters);
  } 
  if (currentMovieSortMethod != MovieSortMethod.Default) {
    movieArray = sortMovies(movieArray, currentMovieSortMethod);
  }

  const movieCount = movieArray?.length || 0;
  useEffect(() => {
    setMovieCount(movieCount);
  }, [movieCount]);

  function handleDeleteMovie(id: string) {
    console.log("Movie deleted");
    // Call API
  }

  function handleFavoriteMovie(id: string) {
    console.log("Movie favorited");
    // Call API
  }

  const movieCardProps = {
    movieInfo: movieArray[1],
    handleDeleteMovie: handleDeleteMovie,
    handleFavoriteMovie: handleFavoriteMovie,
  } as MovieCardProps;
  
  return (
    <div 
    className="movie-grid"
    onChange={() => {setMovieCount(movieCount)}}>
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...movieArray[i]}/>
      ))}
      <div 
      className="add-movie-card" 
      onClick={() => {setAddMovieModalVisibility(AddMovieModalDisplay.Visible)}}>
        <Plus className="add-movie-card-button" size={40} strokeWidth={1.75}></Plus>
        <p className="add-movie-card-text">Add New Movie</p>
        <p className="add-movie-card-subtext">Click to add a movie to this list</p>
      </div>
    </div>
  )
}

export default MovieGrid;