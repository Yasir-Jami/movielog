import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import ListSearch from "@components/ui/ListSearch";
import MovieFilter from "./MovieFilter";
import { defaultGenreFilters } from "@components/utils/MovieFilterUtils";

interface MovieListContainerProps {
  currentMovieList: MovieList,
}

const genres: Genres = defaultGenreFilters();

function MovieListContainer({currentMovieList}: MovieListContainerProps) {
  const [movieFilters, setMovieFilters] = useState<MovieFilters>({
    SearchFilter: "",
    GenreFilter: genres,
    FavoriteFilter: false,
    FilteredByKeyword: false,
    FilteredByGenre: false,
  } as MovieFilters);
  const [movieSortMethod, setMovieSortMethod] = useState<MovieSortMethod>(MovieSortMethod.Default);
  const [currentMovieCount, setMovieCount] = useState<number>(0);

  let movieActionsContent: React.JSX.Element = <></>;
  if (currentMovieCount > 0) {
    movieActionsContent = 
    (
      <div className="movie-actions">
          <ListSearch 
          movieFilters={movieFilters} 
          setMovieFilters={setMovieFilters}/>
          <MovieFilter 
          movieFilters={movieFilters} 
          setMovieFilters={setMovieFilters} 
          setMovieSortMethod={setMovieSortMethod}/>
      </div>
    )
  }

  return (
      <div className="list-container">
        <div className="list-container__metadata">
          <h2 className="list-container__list-name">{currentMovieList.listName}</h2>
          <p className="list-container__movie-count">{currentMovieCount} movies</p>
        </div>
        <MovieGrid 
        currentMovieList={currentMovieList} 
        currentMovieCount={currentMovieCount}
        setMovieCount={setMovieCount}
        currentMovieFilters={movieFilters}
        setMovieFilters={setMovieFilters}
        currentMovieSortMethod={movieSortMethod}
        />
        {movieActionsContent}
    </div>
  )
}

export default MovieListContainer;