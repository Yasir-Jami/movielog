import styles from "@styles/Favorites.module.css";
import { useState, useId } from "react";

function Favorites() {
  const [input, setInput] = useState('');
  const id = useId();
  logger.log(input);

  return (
    <div className={styles.favorites} >
      <div className="input-container">
        <label htmlFor={id}>Filter items</label>
        <input 
        id={id}
        value={input}
        className={styles["favorites-input"]} 
        onInput={e => setInput((e.target as HTMLInputElement).value)}></input>
        </div>
      <div className="items-list">
        <li className={styles["list-item"]}>Grey</li>
        <li className={styles["list-item"]}>Lisa</li>
        <li className={styles["list-item"]}>Bob</li>
        <li className={styles["list-item"]}>Lima</li>
        <li className={styles["list-item"]}>Bean</li>
      </div>
      
    </div>
  )
}

export default Favorites;