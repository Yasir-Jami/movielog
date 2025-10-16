import { Menu } from "lucide-react";
import { MovieList } from "types";
import AddMovie from "./AddMovie";
import styles from "@styles/Header.module.css";
import { useState } from "react";
import useIsMobile from "hooks/useIsMobile";

interface HeaderProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentMovieList: MovieList,
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>,
}

function Header({currentMovieList, updateCurrentList, setSidebarOpen}: HeaderProps){
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  const handleSidebarState = () => {
    setSidebarOpen(prev => !prev);
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header__container"]}>
        <span className={`${styles["header__menu-wrapper"]} ${searchBarOpen && isMobile ? styles.hidden : ""}`} onClick={handleSidebarState}>
          <Menu className={styles["header__menu"]}/>
        </span>
        <h1 className={`${styles["header__title"]} ${searchBarOpen && isMobile ? styles.hidden : ""}`}>movielog</h1>
        <AddMovie 
        currentMovieList={currentMovieList} 
        updateCurrentList={updateCurrentList}
        searchBarOpen={searchBarOpen} 
        setSearchBarOpen={setSearchBarOpen}/>
      </div>
    </div>
  )
}

export default Header;