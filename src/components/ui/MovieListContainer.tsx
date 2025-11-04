import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import ListSearch from "@components/ui/ListSearch";
import MovieFilter from "./MovieFilter";
import { defaultGenreFilters } from "utils/MovieFilterUtils";
import { ArrowLeft } from "lucide-react";
import { Loader } from "@components/ui/Loader";

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
  let content: React.JSX.Element = <></>;
  let movieActionsContent: React.JSX.Element = <></>;
  
  // Could have skeleton while waiting for movie actions to render 
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

  if (currentMovieList === null) {
    content = <Loader/>;
  }
  else {
    content = (
    <div className="list-container">
      <div className="list-container__grid">
        <div className="list-container__metadata">
          <div className="list-return-button" onClick={handleBackButton}>
          <ArrowLeft className="list-return-button-icon"></ArrowLeft>
          <p className="list-return-button-text">Back to Lists</p>
        </div>
          <h2 className="list-container__list-name">{currentMovieList.listName}</h2>
          <p className="list-container__movie-count">
            {currentMovieCount} {(currentMovieCount !== 1) ? "movies" : "movie"}
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

  return (
    <>{content}</>
  )
}

export default MovieListContainer;