import styles from "@styles/MovieListSelector.module.css";
import { MainContentTab, MovieListCardProps } from "types";

function MovieListCard({listName, numberOfMovies, listDescription, listTags, setSelectedTab}: MovieListCardProps) {
  // Change list then change tab
  const handleListSelection = () => {
    if (setSelectedTab) {
      setSelectedTab(MainContentTab.Home)
    }
  }
  
  // TODO "AddTags" modal
  const ListTags = () => {
  let listTagsMap: React.JSX.Element[] = [];

  if (listTags) {
    const shortListTags = listTags.slice(0, Math.min(3, listTags.length));
    listTagsMap = shortListTags.map((tag, i) => (
      <span className={styles["movie-list-tag"]} key={i}>{tag}</span>
    ));
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
      <button 
      className={styles["movie-list-button"]} 
      onClick={handleListSelection}>View List</button>
    </div>
  )
}

export default MovieListCard;