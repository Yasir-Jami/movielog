import "/src/styles/Header.css"
import { useNavigate } from "react-router-dom"

function Header(){
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__brand">
            <h1 className="header__title" onClick={() => navigate('/')}>movielog</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;