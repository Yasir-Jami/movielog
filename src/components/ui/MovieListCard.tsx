import styles from "@styles/MovieListSelector.module.css";
import { MovieListCardProps } from "types";

function MovieListCard({
  listName, 
  movieCount, 
  listDescription, 
  listTags, 
  movieList,
  handleListSelection,
  viewType}: MovieListCardProps) {
    // Change list then change tab
  
  // TODO Create "AddTags" modal which allows you to apply custom and premade tags to a list
  const ListTags = () => {
  let listTagsMap: React.JSX.Element[] = [];
  
  // Show at most three tags, click a button to expand rest of the tags
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
    <div className={styles["movie-list-card"]} onClick={() => {handleListSelection(movieList)}}>
        <p className={styles["movie-list-name"]}>{listName}</p>
          <p className={styles["movie-list-movie-count"]}>
            {movieCount} {(movieCount !== 1) ? "movies" : "movie"}
          </p>
        <ListTags/>
        <p className={styles["movie-list-description"]}>{listDescription}</p>
    </div>
  )
}

export default MovieListCard;