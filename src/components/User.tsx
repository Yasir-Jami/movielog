// Handle rendering of user's lists and favorites depending on if they are logged in or not
import "/src/styles/Header.css"
import { useNavigate } from "react-router-dom";
import { UseAuth } from "./AuthContext";

function User() {
  const {user, isAuthenticated, logout} = UseAuth();
  const navigate = useNavigate();
  logger.log("Authenticated status: " + isAuthenticated);

  // Logged in
  if (isAuthenticated && user) {
    return(
    <div className="user-area">
      <p id="header-user-email">Logged in as {user.email}</p>
      <a href="/home"><button className="header-logout-button" onClick={logout}>Logout</button></a>
    </div>
    )
  }

  // Logged out
  return(
    <div className="user-area">
      {/*<button className="header-login-button" onClick={handleLogin}>Login</button>*/}
      <button className="header-login-button" onClick={() => navigate('/login')}>Login</button>
      <button className="header-register-button" onClick={() => navigate('/register')}>Register</button>
    </div>
  )
  
}

export default User