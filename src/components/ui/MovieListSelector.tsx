import styles from "@styles/MovieListSelector.module.css";
import { MovieListCardProps, MovieList, MainContentTab } from "types";
import MovieListCard from "@components/ui/MovieListCard";

interface MovieListSelectorProps {
  userMovieLists: MovieList[],
  currentMovieList: MovieList,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
  setSelectedTab: React.Dispatch<React.SetStateAction<MainContentTab>>
}

function MovieListSelector({userMovieLists, currentMovieList, setCurrentMovieList, setSelectedTab}: MovieListSelectorProps) {
  // Default lists
  const watchingList: MovieListCardProps = {
    movieList: currentMovieList,
    listName: "Watching",
    movieCount: currentMovieList.movies?.length || 0,
    listDescription: "Movies you're watching",
    listTags: ["Default"],
    setCurrentMovieList: setCurrentMovieList,
    setSelectedTab: setSelectedTab,
  };

  const watchLaterList: MovieListCardProps = {
    movieList: currentMovieList,
    listName: "Watch Later",
    movieCount: 0,
    listDescription: "Movies to watch",
    listTags: ["Default"],
    setCurrentMovieList: setCurrentMovieList,
    setSelectedTab: setSelectedTab,
  };

  const watchedList: MovieListCardProps = {
    movieList: currentMovieList,
    listName: "Watched",
    movieCount: 0,
    listDescription: "Movies you've watched",
    listTags: ["Default"],
    setCurrentMovieList: setCurrentMovieList,
    setSelectedTab: setSelectedTab,
  };

  // Create default lists
  const defaultLists = ["Watching", "Watch Later", "Watched"];
  //const movieListArray: MovieListCardProps[] = [watchingList, watchLaterList, watchedList];
  const movieListArray: MovieListCardProps[] = userMovieLists.map((list) => {
    const movieListCard: MovieListCardProps = {
      movieList: list,
      listName: list.listName,
      movieCount: list.movies?.length ?? 0,
      listDescription: list.listDescription,
      listTags: defaultLists.includes(list.listName) ? [""] : ["Default"],
      setCurrentMovieList: setCurrentMovieList,
      setSelectedTab: setSelectedTab,
    }
    return movieListCard;
  });

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