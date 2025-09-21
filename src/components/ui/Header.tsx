import "/src/styles/Header.css"
import { useNavigate } from "react-router-dom"
import { Menu } from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Header({sidebarOpen, setSidebarOpen}: HeaderProps){
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__container">
        <Menu className="header__menu" onClick={() => {setSidebarOpen}}/>
        <h1 className="header__title" onClick={() => navigate('/')}>movielog</h1>
      </div>
    </div>
  )
}

export default Header;