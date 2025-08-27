import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieGridProps, AddMovieModalDisplay, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import MovieSearch from "@components/ui/MovieSearch";
import AddMovie from "@components/ui/AddMovie";
//import MovieFilter from "./MovieFilter";
//import NoMovies from "@components/ui/NoMovies";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  addNewMovieToList: React.Dispatch<React.SetStateAction<MovieList>>,
}

const genres: Genres = {
  Action: false,
  Adventure: false,
  Animation: false,
  Comedy: false,
  Crime: false,
  Documentary: false,
  Drama: false,
  Family: false,
  Fantasy: false,
  Horror: false,
  Musical: false,
  Mystery: false,
  Romance: false,
  Sport: false,
  Thriller: false,
  Western: false,
}

function MovieListContainer({currentMovieList, addNewMovieToList}: MovieListContainerProps) {
  const [movieFilters, setMovieFilters] = useState<MovieFilters>({
    SearchFilter: "",
    GenreFilter: genres,
    FavoriteFilter: false,
  } as MovieFilters);
  const [movieSortMethod, setMovieSortMethod] = useState<MovieSortMethod>(MovieSortMethod.Default);
  const [currentMovieCount, setMovieCount] = useState<number>(0);
  const [addMoviemodalVisibility, setAddMovieModalVisibility] = useState<AddMovieModalDisplay>(AddMovieModalDisplay.Invisible);
  const movieList: MovieList = currentMovieList;
  
  let content: React.JSX.Element = <></>;
  
  const movieListProps: MovieGridProps = {
    movieListName: movieList?.listName || "Watching",
    movieArray: movieList?.movies || [],
    movieCount: currentMovieCount,
  }

  content = <MovieGrid 
  currentMovieList={currentMovieList} 
  currentMovieCount={currentMovieCount}
  setMovieCount={setMovieCount}
  currentMovieFilters={movieFilters}
  currentMovieSortMethod={movieSortMethod}
  />;
  
  /*
  if (currentMovieCount == 0) {
    content = <NoMovies setModalVisibility={setAddMovieModalVisibility}/>;
  }
  */

  return (
    <div className="list-container">
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">{movieListProps.movieListName}</h2>
        <p className="list-container__movie-count">{movieListProps.movieCount} movies</p>
      </div>
    <div className="movie-actions">
      <MovieSearch movieFilters={movieFilters} setMovieFilters={setMovieFilters}/>
      {/*<MovieFilter/>*/}
      <AddMovie 
      modalVisibility={addMoviemodalVisibility} 
      setModalVisibility={setAddMovieModalVisibility} 
      currentMovieList={currentMovieList}
      addNewMovieToList={addNewMovieToList}
      />
    </div>
      {content}
    </div>
  )
}

export default MovieListContainer;