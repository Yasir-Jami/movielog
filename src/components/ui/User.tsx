// Handle rendering of user's lists and favorites depending on if they are logged in or not
import "/src/styles/Header.css"
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../AuthContext";
import { LogIn, UserPlus } from "lucide-react";

function User() {
  const {user, isAuthenticated, logout} = UseAuth();
  const navigate = useNavigate();
  let content: any;

  // Logged in
  if (isAuthenticated && user) {
    content = (
      <>
      <p className="user-auth__email">Logged in as {user.email}</p>
      <a href="/"><button className="user-auth__logout-button" onClick={logout}>Logout</button></a>
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

export default User