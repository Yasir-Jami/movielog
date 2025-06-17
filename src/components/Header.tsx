import "/src/styles/Header.css"
import clapperboard from "/src/assets/svgs/clapperboard.svg"
import User from "./User.tsx"
import { useNavigate } from "react-router-dom"

function Header(){
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={clapperboard}/>
      <p className="header-title" onClick={() => navigate('/')}>movielog</p>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/movies')}>Movies</li>
          <li onClick={() => navigate('/favorites')}>Favorites</li>
        </ul>
        <User/>
    </div>
  )
}

export default Header