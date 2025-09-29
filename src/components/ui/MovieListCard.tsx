import styles from "@styles/MovieListSelector.module.css";

interface MovieListCardProps {
  listId: number,
  listName: string,
  numberOfMovies: number,
  listTags?: string[],
  listDescription?: string,
}

 const MovieListCard = ({listName, numberOfMovies, listDescription, listTags}: MovieListCardProps) => {
    const movieListArray: MovieListCardProps[] = [];
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
      )}
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

export default MovieListCard;