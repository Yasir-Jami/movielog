import styles from "@styles/MovieListSelector.module.css";
//import CreateMovieList from "@components/ui/CreateMovieList";
//import { MovieList } from "types";

interface MovieListCardProps {
  listId: number,
  listName: string,
  numberOfMovies: number,
  listDescription?: string,
}

function MovieListSelector() {
  const testlist1: MovieListCardProps = {
    listId: 0,
    listName: "Watching",
    numberOfMovies: 12,
  };

  const testlist2: MovieListCardProps = {
    listId: 1,
    listName: "To Watch",
    numberOfMovies: 0,
  };

  const testlist3: MovieListCardProps = {
    listId: 2,
    listName: "Watched",
    numberOfMovies: 13,
  };

  const movieListArray: MovieListCardProps[] = [testlist1, testlist2, testlist3];
  const MovieListCard = ({listName, numberOfMovies, listDescription}: MovieListCardProps) => {
    return (
      <div className={styles["movie-list-card"]}>
        {/*
        <p className={styles["movie-list-name"]}>{movieList.listName}</p>
        <p className={styles["movie-list-movie-count"]}>{movieList.numberOfMovies}</p>
        */}
        <p className={styles["movie-list-name"]}>{listName}</p>
        <p className={styles["movie-list-movie-count"]}>{numberOfMovies}</p>
        <button>View List</button>
      </div>
    )
  }

  return (
    <div className={styles["movie-list-selector"]}>
      <div 
      className={styles["movie-list-grid"]}>
      {movieListArray.map((movielist) => (
          <MovieListCard 
          key={movielist.listId} 
          {...movielist}
          />
      ))}
    </div>
    </div>
  );
}

export default MovieListSelector;