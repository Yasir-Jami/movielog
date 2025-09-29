import styles from "@styles/MovieListSelector.module.css";
import { MovieListCardProps, MovieList, MainContentTab } from "types";
import MovieListCard from "@components/ui/MovieListCard";

interface MovieListSelectorProps {
  currentMovieList: MovieList,
  setSelectedList: React.Dispatch<React.SetStateAction<string>>
  setSelectedTab: React.Dispatch<React.SetStateAction<MainContentTab>>,
}

function MovieListSelector({currentMovieList, setSelectedTab}: MovieListSelectorProps) {
  const watchingList: MovieListCardProps = {
    listId: 0,
    listName: "Watching",
    numberOfMovies: currentMovieList.movies?.length || 0,
    listDescription: "Movies you're watching",
    listTags: ["Default"],
    setSelectedTab: setSelectedTab,
  };

  const watchLaterList: MovieListCardProps = {
    listId: 1,
    listName: "Watch Later",
    numberOfMovies: 0,
    listDescription: "Movies to watch",
    listTags: ["Default"],
  };

  const watchedList: MovieListCardProps = {
    listId: 2,
    listName: "Watched",
    numberOfMovies: 0,
    listDescription: "Movies you've watched",
    listTags: ["Default"],
  };

  const movieListArray: MovieListCardProps[] = [watchingList, watchLaterList, watchedList];

  return (
    <div className={styles["movie-list-selector"]}>
      <div 
      className={styles["movie-list-grid"]}>
      {movieListArray.map((movielist, i) => (
          <MovieListCard 
          key={i}
          {...movielist}
          />
      ))}
      </div>
    </div>
  );
}

export default MovieListSelector;