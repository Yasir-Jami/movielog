import "/src/styles/User.css"
import { useNavigate } from "react-router-dom";
import { UseAuth } from "@components/contexts/AuthContext";
import { LogIn, LogOut, UserPlus } from "lucide-react";

function User() {
  const {user, isAuthenticated, logout} = UseAuth();
  const navigate = useNavigate();
  let content: any;

  // Logged in
  if (user && isAuthenticated) {
    content = (
      <>
        <a href="/"><button className="user-auth__logout-button" onClick={logout}>
          <LogOut className="user-auth__login-icon" size={16} />
          Logout
        </button></a>
      </>
    )
  }

  // Logged out
  else {
    content = (
      <>
        <button className="user-auth__login-button" onClick={() => navigate('/login')}>
          <LogIn className="user-auth__login-icon" size={16} />
          Login
        </button>

        <button className="user-auth__register-button" onClick={() => navigate('/register')}>
          <UserPlus className="user-auth__register-icon" size={16} />
          Register
        </button>
      </>
    )

  }

  return (
    <div className="user-auth">
    {content}
    </div>
  )
  
}

export default User;