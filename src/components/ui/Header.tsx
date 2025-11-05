import styles from "@styles/Header.module.css";
import { Menu } from "lucide-react";
import { MainContentTab, MovieList } from "types";
import AddMovie from "@components/ui/AddMovie";
import { useState } from "react";
import useIsMobile from "hooks/useIsMobile";

interface HeaderProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentMovieList: MovieList,
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>,
  setSelectedTab: React.Dispatch<React.SetStateAction<MainContentTab>>,
}

const Nav = ({handleTabSelection}: {handleTabSelection: (tab: MainContentTab) => void}) => {
  return (
    <nav className={styles["header__nav"]}>
      <ul className={styles["header__nav-list"]}>
        <li 
        className={styles["header__nav-item"]} 
        onClick={() => {}}>Home</li>
        <li 
        className={styles["header__nav-item"]} 
        onClick={() => handleTabSelection(MainContentTab.Lists)}>Lists</li>
        <li 
        className={styles["header__nav-item"]} 
        onClick={() => handleTabSelection(MainContentTab.Reviews)}>Reviews</li>
        <li 
        className={styles["header__nav-item"]} 
        onClick={() => {}}>Profile</li>
        <li 
        className={styles["header__nav-item"]} 
        onClick={() => handleTabSelection(MainContentTab.Settings)}>Settings</li>
      </ul>
    </nav>
  )
}

function Header({
  currentMovieList, 
  updateCurrentList, 
  setSidebarOpen, 
  setSelectedTab}: HeaderProps) {
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  const handleSidebarState = () => {
    setSidebarOpen(prev => !prev);
  }

  const handleTabSelection = (tab: MainContentTab) => {
    console.log(tab);
    setSelectedTab(tab);
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header__container"]}>
        <span 
        className={`${styles["header__menu-wrapper"]} 
        ${searchBarOpen && isMobile ? styles.hidden : ""}`} 
        onClick={handleSidebarState}>
          <Menu className={styles["header__menu"]}/>
        </span>
        <h1 
        className={`${styles["header__title"]} 
        ${searchBarOpen && isMobile ? styles.hidden : ""}`}>movielog</h1>
        <AddMovie 
        currentMovieList={currentMovieList} 
        updateCurrentList={updateCurrentList}
        searchBarOpen={searchBarOpen} 
        setSearchBarOpen={setSearchBarOpen}/>
        <Nav handleTabSelection={handleTabSelection}/>
      </div>
    </div>
  )
}

export default Header;