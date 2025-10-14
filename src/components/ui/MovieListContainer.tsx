import "/src/styles/MovieListContainer.css";
import { SetStateAction, useState } from "react";
import { MovieList, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import ListSearch from "@components/ui/ListSearch";
import MovieFilter from "./MovieFilter";
import { defaultGenreFilters } from "@components/utils/MovieFilterUtils";
import { ArrowLeft } from "lucide-react";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  handleBackButton: () => void,
}

const genres: Genres = defaultGenreFilters();

function MovieListContainer({currentMovieList, handleBackButton}: MovieListContainerProps) {
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
      <div className="list-return-button">
        <ArrowLeft className="list-return-button-icon"></ArrowLeft>
        <p className="list-return-button-text" onClick={handleBackButton}>Back to Lists</p>
      </div>
      <div className="list-container__grid">
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">{currentMovieList.listName}</h2>
        <p className="list-container__movie-count">
          {currentMovieCount} {(currentMovieCount > 1 || currentMovieCount === 0) ? "movies" : "movie"}
        </p>
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
  </div>
  )
}

export default MovieListContainer;