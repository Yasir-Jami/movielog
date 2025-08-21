import { AddMovieModalDisplay } from "types";
import styles from "@styles/NoMovies.module.css";

interface AddMovieSearchProps {
  setModalVisibility: React.Dispatch<React.SetStateAction<AddMovieModalDisplay>>;
}

function NoMovies({setModalVisibility}: AddMovieSearchProps) {

  return (
    <div className={styles['no-movies']} onClick={() => {setModalVisibility(AddMovieModalDisplay.Visible)}}>
      <p className={styles['no-movies-text']}>No movies available. Click to add.</p>
    </div>
  )

}

export default NoMovies;