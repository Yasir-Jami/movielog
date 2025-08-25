import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieInfo, MovieGridProps, AddMovieModalDisplay } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import MovieSearch from "@components/ui/MovieSearch";
import AddMovie from "@components/ui/AddMovie";
//import NoMovies from "@components/ui/NoMovies";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  addNewMovieToList: React.Dispatch<React.SetStateAction<MovieList>>,
}

function MovieListContainer({currentMovieList, addNewMovieToList}: MovieListContainerProps) {
  const [addMoviemodalVisibility, setAddMovieModalVisibility] = useState<AddMovieModalDisplay>(AddMovieModalDisplay.Invisible);
  const movieList: MovieList = currentMovieList;
  let content: React.JSX.Element = <></>;
  
  const movieProps: MovieGridProps = {
    movieListName: movieList?.listName || "Watching",
    movieArray: movieList?.movies || [],
    movieCount: movieList?.movies?.length || 0,
  }

  content = <MovieGrid currentMovieList={currentMovieList}/>;
  
  /*
  if (movieProps.movieCount == 0) {
    content = <NoMovies setModalVisibility={setAddMovieModalVisibility}/>;
  }
  */

  return (
    <div className="list-container">
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">{movieProps.movieListName}</h2>
        <p className="list-container__movie-count">{movieProps.movieCount} movies</p>
      </div>
    <div className="movie-actions">
      <MovieSearch />
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