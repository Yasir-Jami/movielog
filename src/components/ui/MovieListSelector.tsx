import styles from "@styles/MovieListSelector.module.css";
import { MovieListCardProps, MovieList } from "types";
import MovieListCard from "@components/ui/MovieListCard";
import { useState } from "react";
import MovieListContainer from "./MovieListContainer";

interface MovieListSelectorProps {
  userMovieLists: MovieList[],
  currentMovieList: MovieList,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
}

interface DefaultList {
  listName: string,
  listDescription: string,
}

function MovieListSelector({userMovieLists, currentMovieList, setCurrentMovieList}: MovieListSelectorProps) {
  const [listSelected, setListSelected] = useState(false);
  const handleListSelection = (movieList: MovieList) => {
    setListSelected(true);
    setCurrentMovieList(movieList);
  }

  const handleBackButton = () => {
    setListSelected(false);
  }
  
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
      handleListSelection: handleListSelection,
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
        handleListSelection: handleListSelection,
      }
    }
    return movieListCard;
  }).filter((userList) => userList === undefined);
  movieListCards.push(...customListCards);

  let loadedContent: React.JSX.Element = <></>;

  if (listSelected) {
    loadedContent = <MovieListContainer 
    currentMovieList={currentMovieList} 
    handleBackButton={handleBackButton}/>
  }
  else {
    loadedContent = 
    <div className={styles["movie-list-selector"]}>
    <p className={styles["movie-list-selector-title"]}>Green</p>
      <div 
      className={styles["movie-list-grid"]}>
      {movieListCards.map((movielist, i) => (
          <MovieListCard 
          key={i}
          {...movielist}
          />))}
      </div>
    </div>
  }

  return (
    <>{loadedContent}</>
  );
}

export default MovieListSelector;