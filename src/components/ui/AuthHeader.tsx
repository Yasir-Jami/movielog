import "@styles/Header.css";
import { Film } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AuthHeader() {
  const navigate = useNavigate();

  return (
    <div className="auth-header">
      <div className="auth-header__container">
        <Film className="auth-header__logo" onClick={() => navigate('/')}/>
        <h1 className="auth-header__title" onClick={() => navigate('/')}>movielog</h1>
      </div>
    </div>
  )
  
}

export default AuthHeader;