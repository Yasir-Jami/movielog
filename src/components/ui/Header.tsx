import "/src/styles/Header.css";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { MovieList } from "types";
import AddMovie from "./AddMovie";

interface HeaderProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentMovieList: MovieList,
  updateCurrentList: React.Dispatch<React.SetStateAction<MovieList>>,
}

function Header({currentMovieList, updateCurrentList, sidebarOpen, setSidebarOpen}: HeaderProps){
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__container">
        <Menu className="header__menu" onClick={() => {setSidebarOpen}}/>
        <h1 className="header__title" onClick={() => navigate('/')}>movielog</h1>
        <AddMovie currentMovieList={currentMovieList} updateCurrentList={updateCurrentList}/>
      </div>
    </div>
  )
}

export default Header;