import { Menu } from "lucide-react";
import { MovieList } from "types";
import AddMovie from "./AddMovie";
import styles from "@styles/Header.module.css";

interface HeaderProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentMovieList: MovieList,
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>,
}

function Header({currentMovieList, updateCurrentList, setSidebarOpen}: HeaderProps){
  const handleSidebarState = () => {
    setSidebarOpen(prev => !prev);
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header__container"]}>
        <span className={styles["header__menu-wrapper"]} onClick={handleSidebarState}>
          <Menu className={styles["header__menu"]}/>
        </span>
        <h1 className={styles["header__title"]}>movielog</h1>
        <AddMovie currentMovieList={currentMovieList} updateCurrentList={updateCurrentList}/>
      </div>
    </div>
  )
}

export default Header;