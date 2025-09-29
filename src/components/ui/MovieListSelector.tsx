import styles from "@styles/MovieListSelector.module.css";
//import CreateMovieList from "@components/ui/CreateMovieList";
//import { MovieList } from "types";

interface MovieListCardProps {
  listId: number,
  listName: string,
  numberOfMovies: number,
  listTags?: string[],
  listDescription?: string,
}

function MovieListSelector() {
  const testlist1: MovieListCardProps = {
    listId: 0,
    listName: "Watching",
    numberOfMovies: 12,
    listDescription: "Movies you're watching",
    listTags: ["Default"],
  };

  const testlist2: MovieListCardProps = {
    listId: 1,
    listName: "Watch Later",
    numberOfMovies: 0,
    listDescription: "Movies to watch",
    listTags: ["Default"],
  };

  const testlist3: MovieListCardProps = {
    listId: 2,
    listName: "Watched",
    numberOfMovies: 13,
    listDescription: "Movies you've watched",
    listTags: ["Default"],
  };
  
  const testlist4: MovieListCardProps = {
    listId: 3,
    listName: "Action",
    numberOfMovies: 328,
    listTags: ["Action", "Comedy", "Green"],
  };

  const testlist5: MovieListCardProps = {
    listId: 4,
    listName: "Adventure",
    numberOfMovies: 118,
    listTags: ["Action", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure",],
  };

  const movieListArray: MovieListCardProps[] = [testlist1, testlist2, testlist3, testlist4, testlist5];
  const MovieListCard = ({listName, numberOfMovies, listDescription, listTags}: MovieListCardProps) => {
    /*
    if (!listDescription) {
      listDescription = "Add description...";
    }
    */
    
    // TODO "AddTags" modal
    const ListTags = () => {
    let listTagsMap: React.JSX.Element[] = [];

    if (listTags) {
      const shortListTags = listTags.slice(0, Math.min(3, listTags.length));
      listTagsMap = shortListTags.map((tag, i) => (
        <span className={styles["movie-list-tag"]} key={i}>{tag}</span>
      ));
      /*
      if (listTags.length > 3) {
        console.log(listTags.slice(3, -1));
        listTagsMap = shortListTags.map((tag, i) => (
        <span className={styles["movie-list-tag"]} key={i}>{tag}</span>
       ))
        listTagsMap.push(
        <div className={styles["movie-list-tag-extension"]}>
          
        </div>
      )
}
      */
    }
      return (
        <div className={styles["movie-list-tags"]}>
          {listTagsMap}
        </div>
      )
    }
    return (
      <div className={styles["movie-list-card"]}>
        <div className={styles["movie-list-metadata"]}>
          <div className={styles["movie-list-name-and-count"]}>
            <p className={styles["movie-list-name"]}>{listName}</p>
            <p className={styles["movie-list-movie-count"]}>{numberOfMovies} movies</p>
          </div>
          <ListTags/>
          <p className={styles["movie-list-description"]}>{listDescription}</p>
        </div>
        <button className={styles["movie-list-button"]}>View List</button>
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