import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieGridProps, AddMovieModalDisplay, MovieFilters, Genre, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import MovieSearch from "@components/ui/MovieSearch";
import AddMovie from "@components/ui/AddMovie";
import MovieFilter from "./MovieFilter";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  addNewMovieToList: React.Dispatch<React.SetStateAction<MovieList>>,
}

const genres: Genre = {
  Action: { name: "Action", filterApplied: false },
  Adventure: { name: "Adventure", filterApplied: false },
  Animation: { name: "Animation", filterApplied: false },
  Comedy: { name: "Comedy", filterApplied: false },
  Crime: { name: "Crime", filterApplied: false },
  Documentary: { name: "Documentary", filterApplied: false },
  Drama: { name: "Drama", filterApplied: false },
  Family: { name: "Family", filterApplied: false },
  Fantasy: { name: "Fantasy", filterApplied: false },
  Horror: { name: "Horror", filterApplied: false },
  Musical: { name: "Musical", filterApplied: false },
  Mystery: { name: "Mystery", filterApplied: false },
  Romance: { name: "Romance", filterApplied: false },
  Sport: { name: "Sport", filterApplied: false },
  Thriller: { name: "Thriller", filterApplied: false },
  Western: { name: "Western", filterApplied: false },
}

function MovieListContainer({currentMovieList, addNewMovieToList}: MovieListContainerProps) {
  const [movieFilters, setMovieFilters] = useState<MovieFilters>({
    SearchFilter: "",
    GenreFilter: genres,
    FavoriteFilter: false,
    FilteredByKeyword: false,
    FilteredByGenre: false,
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

  return (
    <div className="list-container">
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">{movieListProps.movieListName}</h2>
        <p className="list-container__movie-count">{movieListProps.movieCount} movies</p>
      </div>
    <div className="movie-actions">
      <MovieSearch movieFilters={movieFilters} setMovieFilters={setMovieFilters}/>
      <MovieFilter movieFilters={movieFilters} setMovieFilters={setMovieFilters}/>
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