import "/src/styles/Header.css"
import User from "./User.tsx"
import { Film } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Header(){
  const navigate = useNavigate();
  
  //const [selectedButton, setSelectedButton] = useState(false);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__brand">
            <div className="header__logo-container" onClick={() => navigate('/')}>
              <Film className="header__logo" />
            </div>
            <div>
              <h1 className="header__title">movielog</h1>
              <p className="header__subtitle">Your personal movie backlog</p>
            </div>
            <nav className="header__nav">
                <button className="header__movies" onClick={() => navigate('/')}>Movies</button>
                <button className="header__favorites" onClick={() => navigate('/favorites')}>Favorites</button>
            </nav>          
          </div>

          <div className="header__actions">
            {/* Auth Buttons */}
            <div className="header__auth">
              <User/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header