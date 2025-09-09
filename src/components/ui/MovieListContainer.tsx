import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, AddMovieModalDisplay, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import MovieSearch from "@components/ui/MovieSearch";
import AddMovie from "@components/ui/AddMovie";
import MovieFilter from "./MovieFilter";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  addNewMovieToList: React.Dispatch<React.SetStateAction<MovieList>>,
}

const genres: Genres = {
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

  return (
    <div className="list-container">
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">{currentMovieList.listName}</h2>
        <p className="list-container__movie-count">{currentMovieCount} movies</p>
      </div>
      <div className="movie-actions">
        <MovieSearch movieFilters={movieFilters} setMovieFilters={setMovieFilters}/>
        <MovieFilter movieFilters={movieFilters} setMovieFilters={setMovieFilters} setMovieSortMethod={setMovieSortMethod}/>
        <AddMovie 
        modalVisibility={addMoviemodalVisibility} 
        setModalVisibility={setAddMovieModalVisibility} 
        currentMovieList={currentMovieList}
        addNewMovieToList={addNewMovieToList}
        />
      </div>
      <MovieGrid 
      currentMovieList={currentMovieList} 
      currentMovieCount={currentMovieCount}
      setMovieCount={setMovieCount}
      currentMovieFilters={movieFilters}
      currentMovieSortMethod={movieSortMethod}
      setAddMovieModalVisibility={setAddMovieModalVisibility}
      />
    </div>
  )
}

export default MovieListContainer;