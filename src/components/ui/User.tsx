import "/src/styles/User.css"
import { useNavigate } from "react-router-dom";
import { UseAuth } from "@components/contexts/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";

function User() {
  const {user, isAuthenticated, logout} = UseAuth();
  const navigate = useNavigate();
  let content: any;

  // Logged in
  if (user && isAuthenticated) {
    content = (
      <div className="user-auth__logged-in">
        <div className="user-auth__profile">
          <UserIcon className="user-auth__icon"/>
          <p className="user-auth__email">{user.email}</p>
        </div>
        <a href="/"><button className="user-auth__logout-button" onClick={logout}>
          <LogOut className="user-auth__login-icon" size={16} />
          Logout
        </button></a>
      </div>
    )
  }

  // Logged out
  else {
    content = (
      <>
        <button className="user-auth__login-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="user-auth__register-button" onClick={() => navigate('/register')}>
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