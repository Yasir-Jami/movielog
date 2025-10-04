import styles from "@styles/MovieListSelector.module.css";
import { MovieListCardProps, MovieList, MainContentTab } from "types";
import MovieListCard from "@components/ui/MovieListCard";

interface MovieListSelectorProps {
  userMovieLists: MovieList[],
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
  setSelectedTab: React.Dispatch<React.SetStateAction<MainContentTab>>
}

interface DefaultList {
  listName: string,
  listDescription: string,
}

function MovieListSelector({userMovieLists, setCurrentMovieList, setSelectedTab}: MovieListSelectorProps) {
  let movieListCards: MovieListCardProps[] = [];
  const defaultLists: DefaultList[] = [
    {listName: "Watching", listDescription: "Movies you're watching"},
    {listName: "Watch Later", listDescription: "Movies to watch"},
    {listName: "Watched", listDescription: "Movies you've watched"},
  ];

  userMovieLists = Array.isArray(userMovieLists) ? userMovieLists : [];
  
  for (const defaultList of defaultLists) {
    let defaultListCard = {} as MovieListCardProps;
    const userList = userMovieLists.find(
      (userList) => userList.listName === defaultList.listName
    );

    defaultListCard = {
    movieList: {
      movies: userList ? userList?.movies : [],
      listName: defaultList.listName,
      listTags: ["Default"],
      listDescription: defaultList.listDescription,
    },
      listName: defaultList.listName,
      movieCount: userList?.movies.length ?? 0,
      listDescription: defaultList.listDescription,
      listTags: ["Default"],
      setCurrentMovieList: setCurrentMovieList,
      setSelectedTab: setSelectedTab,
    }
    movieListCards.push(defaultListCard);
  }

  let customListCards: MovieListCardProps[] = userMovieLists.map((userList) => {
    let movieListCard = {} as MovieListCardProps;
    if (!defaultLists.some(defaultList => defaultList.listName === userList.listName)) {
      movieListCard = {
        movieList: userList,
        listName: userList.listName,
        movieCount: userList.movies?.length ?? 0,
        listDescription: userList.listDescription,
        listTags: userList.listTags,
        setCurrentMovieList: setCurrentMovieList,
        setSelectedTab: setSelectedTab,
      }
    }
    return movieListCard;
  }).filter((userList) => userList === undefined);
  
  movieListCards.push(...customListCards);

  return (
    <div className={styles["movie-list-selector"]}>
      <div 
      className={styles["movie-list-grid"]}>
      {movieListCards.map((movielist, i) => (
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