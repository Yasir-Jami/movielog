import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList, MovieInfo, MovieFilters, MovieSortMethod } from "types";
import { SetStateAction } from "react";

interface MovieGridProps {
  currentMovieList: MovieList,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>;
}

function filterMovies(movieArray: MovieList, filters: Filters): MovieInfo[] {
  let filteredList = movieArray;



  return filteredList;
}

function sortMovies(movieList: MovieList): MovieInfo[] {

  return sortedList
}

function MovieGrid({currentMovieList}: MovieGridProps) {
  const movieCount = currentMovieList?.movies?.length || 0;
  let movieArray = {} as MovieInfo[];
  //const filteredMovies = filterMovies(currentMovieList.movies);
  //console.log(filteredMovies);

  //movieArray = currentMovieList.movies;

  // Filter before showing
  
  return (
    <div className="movie-grid">
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...currentMovieList.movies[i]}/>
      ))}
    </div>
  )

}

export default MovieGrid;